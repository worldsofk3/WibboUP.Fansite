import { useAuthUser } from './useAuthUser'
import type { UserData } from '~/types'

export const useAuth = () => {
  const authUser = useAuthUser()
  const authToken = useCookie('auth-token')

  const setUser = (user: UserData | null) => {
    authUser.value = user
  }

  const setCookie = (token: string) => {
    authToken.value = token
  }

  const login = async (username: string, password: string) => {
    const data = useApiFetch<{ Authorization: string }>('/auth', { body: { username, password }, method: 'POST' })

    const token = data.data.value?.Authorization?.split('Bearer ')[1]

    if (token) { setCookie(token) }

    await nextTick()

    await me()
  }

  const logout = () => {
    setCookie('')
    setUser(null)
  }

  const me = async () => {
    if (authToken.value && authUser.value && authUser.value.id === -1) {
      try {
        const data = await useApiFetch<{ user: UserData }>('userdata')

        if (!data) {
          throw new Error('No user data')
        }

        setUser(data.data.value?.user ?? null)
      } catch (error) {
        setCookie('')
      }
    }
  }

  return {
    me,
    login,
    logout,
    setCookie
  }
}
