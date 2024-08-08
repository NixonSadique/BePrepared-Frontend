import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:8080/api/v1'
});

export async function fetchData<T= unknown>(url: string): Promise<T>{
    const response = await api.get(url);
    return response.data;
}

export async function postData<T = unknown>(url: string, data: unknown): Promise<void>{
    const response = await api.post(url, data);
    return response.data;
}