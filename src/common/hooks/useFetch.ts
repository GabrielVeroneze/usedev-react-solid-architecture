import { useEffect, useState } from 'react'
import axios from 'axios'

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

        axios
            .get<T>(url)
            .then((response) => {
                setData(response.data)
                setIsLoading(false)
            })
            .catch(() => {
                setError('Erro ao carregar os dados!')
                setIsLoading(false)
            })
    }, [url])

    return { data, isLoading, error }
}
