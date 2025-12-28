import type { HttpClient } from '@/common/types/httpClient'
import axios from 'axios'

export const Http = (): HttpClient => {
    return {
        get: async <T>(url: string): Promise<T> => {
            return axios.get<T>(url).then((response) => response.data)
        },
    }
}
