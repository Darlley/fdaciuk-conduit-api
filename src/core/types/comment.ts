import { ProfileType } from '@/core/types/profile'

export type CommentType = {
  id: number
  createdAt: string
  updatedAt: string
  body: string
  author: ProfileType
}
