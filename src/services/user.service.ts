import axios from "axios"
import { AuthResponse, LoginType, ProfileType } from "../types/user.types"


export const register = (payload: ProfileType): Promise<AuthResponse> => {
    return axios.post('/api/v1/users/register', payload)
}

export const login = (payload: LoginType): Promise<AuthResponse> => {
    return axios.post('/api/v1/users/login', payload)
}

export const getUserProfile = (): Promise<ProfileType> => {
    return axios.get('/api/v1/users/me')
}

export const updateUserProfile = (payload: ProfileType): Promise<ProfileType> => {
    return axios.put('/api/v1/users/me', payload)
}

export const refreshToken = (): Promise<AuthResponse> => {
    return axios.get('/api/v1/users/me/refresh')
}

export const showUserInfo = (id: number): Promise<ProfileType> => {
    return axios.get(`/api/v1/users/${id}`)
}
