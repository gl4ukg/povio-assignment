
export interface LoginType {
    email: string,
    password: string,
}

export interface ProfileType {
    id?: number,
    first_name: string,
    last_name: string,
    date_of_birth?: string,
    email?: string,
    profile_picture?: string,
    password?: string
    password_confirmation?: string,
    full_name?: string,
}

export interface AuthResponse {
    auth_token:	string,
    error?: string
}

export interface IUserInfoResponse {
    user: ProfileType,
    error?: string
}