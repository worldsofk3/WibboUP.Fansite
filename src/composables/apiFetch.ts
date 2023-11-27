import type { UseFetchOptions } from 'nuxt/app'
import { defu } from 'defu'

export function useApiFetch<T> (url: string | (() => string), options: UseFetchOptions<T> = {}) {
  const authToken = useCookie('auth-token')
  const { showMessage } = useNotification()

  const defaults: UseFetchOptions<T> = {
    // set user token if connected
    headers: authToken.value
      ? { Authorization: `Bearer ${authToken.value}` }
      : {},

    onResponseError (_ctx) {
      const status = _ctx.response.status
      const message = _ctx.response._data.message ?? ''

      if (status === 404 || status === 403) {
        throw createError({ statusCode: status, message })
      } else {
        showMessage({ message })
      }
    }
  }

  // for nice deep defaults, please use unjs/defu
  const params = defu(options, defaults)

  return useFetch(url, params)
}
