import axios from "axios"
import { IComment, IContent, ILike, ISighting, ISightingCommentResponse, ISightingLikeResponse, ISightingsResponse } from "../types/sigting.type"
import { getBearerToken } from "../utils/auth.util";

export const getSightings = (): Promise<ISightingsResponse> => {
    const token = getBearerToken();
    return axios.get('/api/v1/sightings', {
        headers: {
            "Authorization": "Bearer " + JSON.parse(token as string)
        }
    })
}

export const createSighting = (payload: ISighting): Promise<ISighting> => {
    const token = getBearerToken();
    return axios.post('/api/v1/sightings', payload, {
        headers: {
            "Authorization": "Bearer " + JSON.parse(token as string)
        }
    })
}

export const getSightingInfo = (id: number): Promise<ISighting> => {
    const token = getBearerToken();
    return axios.get(`/api/v1/sightings/${id}`, {
        headers: {
            "Authorization": "Bearer " + JSON.parse(token as string)
        }
    })
}

export const updateSightingInfo = (id: number, payload: ISighting): Promise<ISighting> => {
    const token = getBearerToken();
    return axios.put(`/api/v1/sightings/${id}`, payload, {
        headers: {
            "Authorization": "Bearer " + JSON.parse(token as string)
        }
    })
}

export const deleteSightingInfo = (id: number): Promise<ISighting> => {
    const token = getBearerToken();
    return axios.delete(`/api/v1/sightings/${id}`, {
        headers: {
            "Authorization": "Bearer " + JSON.parse(token as string)
        }
    })
}

export const getUserSightings = (id: number): Promise<ISightingsResponse> => {
    const token = getBearerToken();
    return axios.get(`/api/v1/users/${id}/sightings`, {
        headers: {
            "Authorization": "Bearer " + JSON.parse(token as string)
        }
    })
}

export const getSightingLikes = (sighting_id: number, page: number): Promise<ISightingLikeResponse> => {
    const token = getBearerToken();
    return axios.get(`/api/v1/sightings/${sighting_id}/likes`, {
        params: {
            page
        },
        headers: {
            "Authorization": "Bearer " + JSON.parse(token as string)
        }
    })
}

export const createSightingLikes = (sighting_id: number, page: number): Promise<ILike> => {
    const token = getBearerToken();
    return axios.get(`/api/v1/sightings/${sighting_id}/likes`, {
        params: {
            page
        },
        headers: {
            "Authorization": "Bearer " + JSON.parse(token as string)
        }
    })
}

export const removeSightingLikes = (sighting_id: number): Promise<ILike> => {
    const token = getBearerToken();
    return axios.delete(`/api/v1/sightings/${sighting_id}/likes`, {
        headers: {
            "Authorization": "Bearer " + JSON.parse(token as string)
        }
    })
}

export const getSightingComment = (sighting_id: number, page: number): Promise<ISightingCommentResponse> => {
    const token = getBearerToken();
    return axios.get(`/api/v1/sightings/${sighting_id}/comments`, {
        params: {
            page
        },
        headers: {
            "Authorization": "Bearer " + JSON.parse(token as string)
        }
    })
}

export const createSightingComment = (sighting_id: number, payload: IContent): Promise<ISightingCommentResponse> => {
    const token = getBearerToken();
    return axios.post(`/api/v1/sightings/${sighting_id}/comments`, payload, {
        headers: {
            "Authorization": "Bearer " + JSON.parse(token as string)
        }
    })
}

export const deleteSightingComment = (sighting_id: number, id: number): Promise<IComment> => {
    const token = getBearerToken();
    return axios.delete(`/api/v1/sightings/${sighting_id}/comments/${id}`, {
        headers: {
            "Authorization": "Bearer " + JSON.parse(token as string)
        }
    })
}