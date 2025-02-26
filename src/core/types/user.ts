export type UserType = {
  email: string // TODO: Validação de emai
  token: string
  username: string
  bio: string
  image: string
}

export type CreateUserType = {
  username: string
  email: string
  password: string
}
