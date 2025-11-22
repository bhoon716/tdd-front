import apiClient from './client';
import { LoginResponse, SignupResponse, ApiResponse } from '../types';

export const authApi = {
    login: async (email: string, password: string): Promise<LoginResponse> => {
        const response = await apiClient.post<ApiResponse<LoginResponse>>('/auth/login', { email, password });
        return response.data.data;
    },

    signup: async (email: string, password: string): Promise<SignupResponse> => {
        const response = await apiClient.post<ApiResponse<SignupResponse>>('/auth/signup', { email, password });
        return response.data.data;
    },
};
