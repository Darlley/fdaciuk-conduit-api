import { CreateUserType } from '@/core/types/user'
import { register, OutsideRegister } from './register'
import * as TE from 'fp-ts/TaskEither'
import { pipe } from 'fp-ts/function'

const registerOk: OutsideRegister<String> = async (data) => {
  return `Usuário ${data.username} cadastrado com sucesso!`
}

const data: CreateUserType = {
  username: 'goku',
  email: 'goku@mail.com',
  password: 'goku123',
}

it('should successfully register a user', async () => {
  return pipe(
    data,
    register(registerOk),
    TE.map((result) => expect(result).toBe(`Usuário ${data.username} cadastrado com sucesso!`)),
  )()
})
