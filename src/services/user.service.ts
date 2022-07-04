import axios from "axios"
import { AuthResponse, IUserInfoResponse, LoginType, ProfileType } from "../types/user.types"


export const register = (payload: ProfileType): Promise<AuthResponse> => {
    return axios.post('/api/v1/users/register', payload)
}

export const login = (payload: LoginType): Promise<AuthResponse> => {
    return axios.post('/api/v1/users/login', payload)
}

export const getUserProfile = (): Promise<IUserInfoResponse> => {
    const token = localStorage.getItem('bearerToken')
    return axios.get('/api/v1/users/me', {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
}

export const updateUserProfile = (payload: ProfileType): Promise<ProfileType> => {
    const token = localStorage.getItem('bearerToken')
    return axios.put('/api/v1/users/me', payload, {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
}

export const refreshToken = (): Promise<AuthResponse> => {
    const token = localStorage.getItem('bearerToken')
    return axios.get('/api/v1/users/me/refresh', {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
}

export const showUserInfo = (id: number): Promise<ProfileType> => {
    const token = localStorage.getItem('bearerToken')
    return axios.get(`/api/v1/users/${id}`, {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
}
