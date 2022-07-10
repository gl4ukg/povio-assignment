import axios from "axios"
import { AuthResponse, IUserInfoResponse, LoginType, ProfileType } from "../types/user.types"
import { getBearerToken } from "../utils/auth";

const token = getBearerToken();

export const register = (payload: ProfileType): Promise<AuthResponse> => {
    return axios.post('/api/v1/users/register', payload)
}

export const login = (payload: LoginType): Promise<AuthResponse> => {
    return axios.post('/api/v1/users/login', payload)
}

export const getUserProfile = (): Promise<IUserInfoResponse> => {
    return axios.get('/api/v1/users/me', {
        headers: {
            "Authorization": "Bearer " + JSON.parse(token as string)
        }
    })
}

export const updateUserProfile = (payload: ProfileType): Promise<ProfileType> => {
    return axios.put('/api/v1/users/me', payload, {
        headers: {
            "Authorization": "Bearer " + JSON.parse(token as string)
        }
    })
}

export const refreshToken = (): Promise<AuthResponse> => {
    return axios.get('/api/v1/users/me/refresh', {
        headers: {
            "Authorization": "Bearer " + JSON.parse(token as string)
        }
    })
}

export const showUserInfo = (id: number): Promise<ProfileType> => {
    return axios.get(`/api/v1/users/${id}`, {
        headers: {
            "Authorization": "Bearer " + JSON.parse(token as string)
        }
    })
}
