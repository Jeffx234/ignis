import useSWR from 'swr'
import { api } from '../services/api'

const fetcher = (url: string) => api.get(url).then((res) => res.data)

export function useSwr(url: any) {
  const { data, error } = useSWR(url, fetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}
