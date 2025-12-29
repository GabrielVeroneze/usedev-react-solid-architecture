import { CATEGORIES_BASE_URL } from '@/common/constants/endpoints'
import type { HttpClient } from '@/common/types/httpClient'
import type { CategoryService } from '@/common/types/CategoryService'
import type { Category } from '@/common/types/category'

export const categoryService = (http: HttpClient): CategoryService => {
    return {
        fetchCategories: async () => {
            try {
                const response = await http.get<{ categories: Category[] }>(
                    CATEGORIES_BASE_URL,
                )

                return response.categories
            } catch {
                throw new Error('Erro ao buscar categorias')
            }
        },
    }
}
