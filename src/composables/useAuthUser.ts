import type { UserData } from '~/types'

export const useAuthUser = () => useState<UserData | null>('user', () => null)
