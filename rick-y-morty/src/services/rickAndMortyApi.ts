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

const buildUrl = (path: string, params?: Record<string, string>) => {
    const url = new URL(path, API_BASE_URL)
    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            if (value.trim().length > 0) {
                url.searchParams.set(key, value.trim())
            }
        })
    }
    return url.toString()
}

export const fetchCharacterByName = async (name: string): Promise<Character> => {
    const url = buildUrl('/character', { name })
    const response = await fetch(url)

    if (!response.ok) {
        if (response.status === 404) {
            throw new ApiError('No se encontraron personajes con ese nombre.', 404)
        }
        throw new ApiError('No fue posible consultar la API.', response.status)
    }

    const data = (await response.json()) as CharactersResponse
    if (!data.results?.length) {
        throw new ApiError('No se encontraron personajes con ese nombre.', 404)
    }

    return data.results[0]
}
