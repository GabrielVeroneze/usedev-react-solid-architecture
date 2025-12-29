import { useEffect, useState } from 'react'
import type { CategoryService } from '@/common/types/CategoryService'
import type { Category } from '@/common/types/category'

export const useFetchCategories = (categoryService: CategoryService) => {
    const [categories, setCategories] = useState<Category[] | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setIsLoading(true)

                const categoriesData = await categoryService.fetchCategories()

                setCategories(categoriesData)
                setIsLoading(false)
            } catch (error) {
                setError((error as Error).message)
                setIsLoading(false)
            }
        }

        fetchCategories()
    }, [categoryService])

    return { categories, isLoading, error }
}
