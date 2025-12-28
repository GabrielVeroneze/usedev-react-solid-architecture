import { useEffect, useState } from 'react'
import { Http } from '@/common/lib/httpClient'
import type { HttpClient } from '@/common/lib/httpClient/HttpClient'

interface FetchResult<T> {
    data: T | null
    isLoading: boolean
    error: string | null
}

export const useFetch = <T>(url: string): FetchResult<T> => {
    const [data, setData] = useState<T | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        setIsLoading(true)

        const http: HttpClient = Http()

        http.get<T>(url)
            .then((response) => {
                setData(response)
                setIsLoading(false)
            })
            .catch(() => {
                setError('Erro ao carregar os dados!')
                setIsLoading(false)
            })
    }, [url])

    return { data, isLoading, error }
}
