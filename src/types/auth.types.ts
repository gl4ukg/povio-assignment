
export interface LoginType {
    username: string,
    password: string,
}

export interface SignUpType {
    first_name: string,
    last_name: string,
    date_of_birth: string,
    email: string,
    password: string
}

export interface AuthResponse {
    auth_token:	string,
    error?: string
}