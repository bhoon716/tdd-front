import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { useAuth } from '../../context/AuthContext';
import { todoApi } from '../../api/todo';
import { Todo, TodoStatus } from '../../types';
import { TodoItem } from '../../components/TodoItem';
import { Button } from '../../components/Button';

const TodoList = () => {
    const { logout } = useAuth();
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const todos = await todoApi.getAll();
            // Sort by ID desc (newest first)
            const sorted = todos.sort((a, b) => b.id - a.id);
            setTodos(sorted);
        } catch (error) {
            console.error('Failed to fetch todos', error);
        }
    };

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTitle.trim() || !newContent.trim()) return;

        setIsLoading(true);
        try {
            await todoApi.create({ title: newTitle, content: newContent });
            setNewTitle('');
            setNewContent('');
            await fetchTodos();
        } catch (error) {
            console.error('Failed to create todo', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleUpdate = async (id: number, status: TodoStatus) => {
        const todo = todos.find((t) => t.id === id);
        if (!todo) return;

        try {
            await todoApi.update(id, {
                title: todo.title,
                content: todo.content,
                status,
            });
            // Optimistic update
            setTodos((prev) =>
                prev.map((t) => (t.id === id ? { ...t, status } : t))
            );
        } catch (error) {
            console.error('Failed to update todo', error);
            await fetchTodos(); // Revert on error
        }
    };

    const handleDelete = async (id: number) => {
        if (!window.confirm('정말 삭제하시겠습니까?')) return;
        try {
            await todoApi.delete(id);
            setTodos((prev) => prev.filter((t) => t.id !== id));
        } catch (error) {
            console.error('Failed to delete todo', error);
        }
    };

    const onDragEnd = async (result: DropResult) => {
        const { destination, source, draggableId } = result;

        if (!destination) return;

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const todoId = parseInt(draggableId);
        const newStatus = destination.droppableId as TodoStatus;

        // Optimistic update
        setTodos((prev) =>
            prev.map((t) => (t.id === todoId ? { ...t, status: newStatus } : t))
        );

        try {
            const todo = todos.find((t) => t.id === todoId);
            if (todo) {
                await todoApi.update(todoId, {
                    title: todo.title,
                    content: todo.content,
                    status: newStatus,
                });
            }
        } catch (error) {
            console.error('Failed to update status via drag and drop', error);
            fetchTodos(); // Revert
        }
    };

    // Filter todos by status
    const thinkTodos = todos.filter(t => t.status === TodoStatus.THINK);
    const doTodos = todos.filter(t => t.status === TodoStatus.DO);
    const doneTodos = todos.filter(t => t.status === TodoStatus.DONE);

    const renderColumn = (title: string, status: TodoStatus, items: Todo[], color: string) => (
        <div className="kanban-column">
            <div className="kanban-header">
                <span className="kanban-title" style={{ color }}>{title}</span>
                <span className="kanban-count">{items.length}</span>
            </div>
            <Droppable droppableId={status}>
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: '100px' }}
                    >
                        {items.map((todo, index) => (
                            <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                            ...provided.draggableProps.style,
                                            opacity: snapshot.isDragging ? 0.8 : 1,
                                            marginBottom: '1rem',
                                        }}
                                    >
                                        <TodoItem
                                            todo={todo}
                                            onUpdate={handleUpdate}
                                            onDelete={handleDelete}
                                        />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );

    return (
        <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <h1 className="text-gradient" style={{
                        fontSize: '2.5rem',
                        fontWeight: 900,
                        letterSpacing: '-0.02em',
                        cursor: 'pointer'
                    }}>
                        Think. Do. Done.
                    </h1>
                </Link>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', fontWeight: 500 }}>
                        {todos.length} Tasks
                    </span>
                    <Button variant="secondary" onClick={logout} style={{
                        background: 'rgba(255,255,255,0.05)',
                        color: 'var(--color-text-main)',
                        border: '1px solid var(--color-border)',
                        backdropFilter: 'blur(4px)'
                    }}>
                        로그아웃
                    </Button>
                </div>
            </header>

            <div className="card animate-slide-up" style={{
                marginBottom: '3rem',
                padding: '0',
                overflow: 'hidden',
                background: 'rgba(30, 41, 59, 0.6)',
                border: '1px solid var(--color-primary)',
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.15)'
            }}>
                <form onSubmit={handleCreate} style={{ position: 'relative' }}>
                    <input
                        placeholder="할 일을 입력하세요"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '1.5rem 1.5rem 1rem 1.5rem',
                            fontSize: '1.25rem',
                            fontWeight: '600',
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--color-text-main)',
                            outline: 'none'
                        }}
                    />
                    <input
                        placeholder="상세 내용을 입력하세요..."
                        value={newContent}
                        onChange={(e) => setNewContent(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '1rem 5rem 1.5rem 1.5rem', // Right padding for button
                            fontSize: '1rem',
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--color-text-muted)',
                            outline: 'none'
                        }}
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !newTitle.trim()}
                        style={{
                            position: 'absolute',
                            right: '1rem',
                            bottom: '1rem',
                            background: 'var(--gradient-primary)',
                            border: 'none',
                            borderRadius: '50%',
                            width: '48px',
                            height: '48px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            opacity: newTitle.trim() ? 1 : 0.5,
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            boxShadow: newTitle.trim() ? '0 4px 12px rgba(99, 102, 241, 0.4)' : 'none',
                            transform: newTitle.trim() ? 'scale(1)' : 'scale(0.9)'
                        }}
                        onMouseEnter={(e) => {
                            if (newTitle.trim()) {
                                e.currentTarget.style.transform = 'scale(1.1) rotate(90deg)';
                                e.currentTarget.style.boxShadow = '0 0 20px rgba(99, 102, 241, 0.6)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (newTitle.trim()) {
                                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.4)';
                            }
                        }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4V20M4 12H20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </form>
            </div>

            <DragDropContext onDragEnd={onDragEnd}>
                <div className="kanban-board">
                    {renderColumn('THINK', TodoStatus.THINK, thinkTodos, 'var(--color-text-muted)')}
                    {renderColumn('DO', TodoStatus.DO, doTodos, 'var(--color-warning)')}
                    {renderColumn('DONE', TodoStatus.DONE, doneTodos, 'var(--color-success)')}
                </div>
            </DragDropContext>
        </div>
    );
};

export default TodoList;
