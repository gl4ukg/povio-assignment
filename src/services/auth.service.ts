import axios from "axios"
import { AuthResponse, LoginType, SignUpType } from "../types/auth.types"


export const register = (payload: SignUpType): Promise<AuthResponse> => {
    return axios.post('/api/v1/users/register', payload)
}

export const login = (payload: LoginType): Promise<AuthResponse> => {
    return axios.post('/api/v1/users/login', payload)
}