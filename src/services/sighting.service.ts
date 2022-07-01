import axios from "axios"
import { IComment, IContent, ILike, ISighting, ISightingCommentResponse, ISightingLikeResponse, ISightingsResponse } from "../types/sigting.type"


export const getSightings = (page: number): Promise<ISightingsResponse> => {
    return axios.get('/api/v1/sightings', {
        params: {
            page
        }
    })
}

export const createSighting = (payload: ISighting): Promise<ISighting> => {
    return axios.post('/api/v1/sightings', payload)
}

export const getSightingInfo = (id: number): Promise<ISighting> => {
    return axios.get(`/api/v1/sightings/${id}`)
}

export const updateSightingInfo = (id: number, payload: ISighting): Promise<ISighting> => {
    return axios.put(`/api/v1/sightings/${id}`, payload)
}

export const deleteSightingInfo = (id: number): Promise<ISighting> => {
    return axios.delete(`/api/v1/sightings/${id}`)
}

export const getUserSightings = (id: number): Promise<ISightingsResponse> => {
    return axios.get(`/api/v1/users/${id}/sightings`)
}

export const getSightingLikes = (sighting_id: number, page: number): Promise<ISightingLikeResponse> => {
    return axios.get(`/api/v1/sightings/${sighting_id}/likes`, {
        params: {
            page
        }
    })
}

export const createSightingLikes = (sighting_id: number, page: number): Promise<ILike> => {
    return axios.get(`/api/v1/sightings/${sighting_id}/likes`, {
        params: {
            page
        }
    })
}

export const removeSightingLikes = (sighting_id: number): Promise<ILike> => {
    return axios.delete(`/api/v1/sightings/${sighting_id}/likes`)
}

export const getSightingComment = (sighting_id: number, page: number): Promise<ISightingCommentResponse> => {
    return axios.get(`/api/v1/sightings/${sighting_id}/comments`, {
        params: {
            page
        }
    })
}

export const createSightingComment = (sighting_id: number, payload: IContent): Promise<ISightingCommentResponse> => {
    return axios.post(`/api/v1/sightings/${sighting_id}/comments`, payload)
}

export const deleteSightingComment = (sighting_id: number, id: number): Promise<IComment> => {
    return axios.delete(`/api/v1/sightings/${sighting_id}/comments/${id}`)
}