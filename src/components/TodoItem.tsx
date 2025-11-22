import React from 'react';
import { Todo, TodoStatus } from '../types';
import { Button } from './Button';

interface TodoItemProps {
    todo: Todo;
    onUpdate: (id: number, status: TodoStatus) => void;
    onDelete: (id: number) => void;
}

const statusColors = {
    [TodoStatus.THINK]: 'var(--color-text-muted)',
    [TodoStatus.DO]: 'var(--color-warning)',
    [TodoStatus.DONE]: 'var(--color-success)',
};

export const TodoItem: React.FC<TodoItemProps> = ({
    todo,
    onUpdate,
    onDelete,
}) => {
    const handleNextStatus = () => {
        const nextStatus =
            todo.status === TodoStatus.THINK
                ? TodoStatus.DO
                : todo.status === TodoStatus.DO
                    ? TodoStatus.DONE
                    : TodoStatus.THINK;
        onUpdate(todo.id, nextStatus);
    };

    const handlePrevStatus = () => {
        const prevStatus =
            todo.status === TodoStatus.DONE
                ? TodoStatus.DO
                : todo.status === TodoStatus.DO
                    ? TodoStatus.THINK
                    : TodoStatus.DONE;
        onUpdate(todo.id, prevStatus);
    };

    return (
        <div
            className="card"
            style={{
                padding: '1rem',
                marginBottom: '0',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                position: 'relative',
            }}
        >
            <div style={{ marginBottom: '0.75rem' }}>
                <h3 style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    marginBottom: '0.5rem',
                    textDecoration: todo.status === TodoStatus.DONE ? 'line-through' : 'none',
                    color: todo.status === TodoStatus.DONE ? 'var(--color-text-muted)' : 'var(--color-text-main)'
                }}>
                    {todo.title}
                </h3>
                <p style={{
                    color: 'var(--color-text-muted)',
                    fontSize: '0.875rem',
                    lineHeight: 1.5,
                    whiteSpace: 'pre-wrap'
                }}>
                    {todo.content}
                </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '1rem' }}>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete(todo.id);
                    }}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--color-text-muted)',
                        padding: '0.5rem',
                        borderRadius: 'var(--radius-md)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0.6
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--color-error)';
                        e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)';
                        e.currentTarget.style.opacity = '1';
                        e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--color-text-muted)';
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.opacity = '0.6';
                        e.currentTarget.style.transform = 'scale(1)';
                    }}
                    title="삭제"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: statusColors[todo.status]
            }} />
        </div>
    );
};
