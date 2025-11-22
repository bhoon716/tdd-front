export interface User {
    id: number;
    email: string;
    createdAt: string;
    updatedAt: string;
}

export enum TodoStatus {
    THINK = 'THINK',
    DO = 'DO',
    DONE = 'DONE',
}

export interface Todo {
    id: number;
    title: string;
    content: string;
    status: TodoStatus;
    createdAt: string;
    updatedAt: string;
}

export interface ApiResponse<T> {
    success: boolean;
    code: string;
    data: T;
}

export interface LoginResponse {
    accessToken: string;
}

export interface SignupResponse {
    id: number;
    email: string;
}
