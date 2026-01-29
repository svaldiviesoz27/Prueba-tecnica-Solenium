import type { Character, CharactersResponse } from '../types/rickAndMorty'

const API_BASE_URL = import.meta.env.VITE_RICK_MORTY_API_BASE_URL ?? 'https://rickandmortyapi.com/api'

export class ApiError extends Error {
    status: number

    constructor(message: string, status: number) {
        super(message)
        this.name = 'ApiError'
        this.status = status
    }
}

const buildUrl = (path: string, params?: Record<string, string | number>) => {
    // Asegurar que la base URL termine con /
    const baseUrl = API_BASE_URL.endsWith('/') ? API_BASE_URL : `${API_BASE_URL}/`
    const url = new URL(path, baseUrl)
    
    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            const stringValue = String(value).trim()
            if (stringValue.length > 0) {
                url.searchParams.set(key, stringValue)
            }
        })
    }
    return url.toString()
}

export interface SearchFilters {
    name?: string
    status?: string
    species?: string
    gender?: string
    page?: number
}

export const searchCharacters = async (filters: SearchFilters = {}): Promise<CharactersResponse> => {
    try {
        const params: Record<string, string | number> = {}
        
        if (filters.name) params.name = filters.name
        if (filters.status && filters.status !== 'all') params.status = filters.status
        if (filters.species && filters.species !== 'all') params.species = filters.species
        if (filters.gender && filters.gender !== 'all') params.gender = filters.gender
        if (filters.page) params.page = filters.page

        const url = buildUrl('character', params)
        console.log('Fetching URL:', url)
        
        const response = await fetch(url)

        if (!response.ok) {
            if (response.status === 404) {
                return {
                    info: { count: 0, pages: 0, next: null, prev: null },
                    results: [],
                }
            }
            throw new ApiError(`Error ${response.status}: Unable to query the API.`, response.status)
        }

        const data = (await response.json()) as CharactersResponse
        return data
    } catch (error) {
        if (error instanceof ApiError) {
            throw error
        }
        // Network or CORS error
        console.error('Network error:', error)
        throw new ApiError('Connection error. Check your internet connection.', 0)
    }
}

export const fetchCharacterById = async (id: number): Promise<Character> => {
    const url = buildUrl(`character/${id}`)
    const response = await fetch(url)

    if (!response.ok) {
        if (response.status === 404) {
            throw new ApiError('Character not found.', 404)
        }
        throw new ApiError('Unable to query the API.', response.status)
    }

    return (await response.json()) as Character
}
