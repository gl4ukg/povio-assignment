
export interface LoginType {
    username: string,
    password: string,
}

export interface ProfileType {
    id?: number,
    first_name: string,
    last_name: string,
    date_of_birth: string,
    email: string,
    profile_picture?: string,
    password?: string
    password_confirmation?: string,
}

export interface AuthResponse {
    auth_token:	string,
    error?: string
}
