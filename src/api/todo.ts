import apiClient from './client';
import { Todo, ApiResponse, TodoStatus } from '../types';

export interface CreateTodoRequest {
    title: string;
    content: string;
}

export interface UpdateTodoRequest {
    title: string;
    content: string;
    status: TodoStatus;
}

export const todoApi = {
    getAll: async (): Promise<Todo[]> => {
        const response = await apiClient.get<ApiResponse<Todo[]>>('/todos');
        return response.data.data;
    },

    getById: async (id: number): Promise<Todo> => {
        const response = await apiClient.get<ApiResponse<Todo>>(`/todos/${id}`);
        return response.data.data;
    },

    create: async (data: CreateTodoRequest): Promise<Todo> => {
        const response = await apiClient.post<ApiResponse<Todo>>('/todos', data);
        return response.data.data;
    },

    update: async (id: number, data: UpdateTodoRequest): Promise<Todo> => {
        const response = await apiClient.put<ApiResponse<Todo>>(`/todos/${id}`, data);
        return response.data.data;
    },

    delete: async (id: number): Promise<void> => {
        await apiClient.delete(`/todos/${id}`);
    },
};
