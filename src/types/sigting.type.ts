import { IPagination } from "./app.types"
import { IFlower } from "./flowers.types"
import { ProfileType } from "./user.types"

export interface ISighting {
    id:	number
    flower_id:	number
    name:	string
    description:	string
    latitude:	number
    longitude:	number
    comments_count?: number
    created_at?: string
    flower?: IFlower
    likes_count?: number
    picture?: string
    user?: ProfileType
}

export interface ISightingsResponse {
    sightings: ISighting[],
    meta: IPagination
}

export interface ILike {
    id:number
    user_id:number
    user_full_name:	string
    sighting_id:number
}

export interface ISightingLikeResponse {
    likes: ILike[]
    meta: IPagination
}

export interface IComment {
    id:number,
    user_id:number
    user_full_name:	string
    sighting_id:number
    content: string
}

export interface ISightingCommentResponse {
    comments: IComment[]
    meta: IPagination
}

export interface IContent {
    content: string
}