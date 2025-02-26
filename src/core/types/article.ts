import { ProfileType } from '@/core/types/profile'
import { TagType } from '@/core/types/tag'

export type ArticleType = {
  slug: string,
  title: string,
  description: string,
  body: string,
  tagList: TagType[], // TODO: Array<Tags>
  createdAt: string,
  updatedAt: string,
  favorited: boolean,
  favoritesCount: number // TODO: Validar que seja inteiro positivo
  author: ProfileType
}

export type ArticlesType = {
  articles: ArticleType[]
  articlesCount: number
}
