import * as TE from 'fp-ts/TaskEither'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import { CreateUserType } from '@/core/types/user'

export type OutsideRegister<A> = (data: CreateUserType) => Promise<A>

type RegisterType = <A>(outsideRegister: OutsideRegister<A>) => (data: CreateUserType) => TE.TaskEither<Error, A>

export const register: RegisterType = (outsideRegister) => (data) => {
  return pipe(
    TE.tryCatch(
      () => outsideRegister(data),
      E.toError,
    ),
  )
}
