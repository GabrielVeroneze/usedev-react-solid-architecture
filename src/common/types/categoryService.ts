import type { Category } from '@/common/types/category'

export interface CategoryService {
    fetchCategories: () => Promise<Category[]>
}
