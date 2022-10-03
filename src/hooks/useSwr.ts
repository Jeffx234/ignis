import useSWR from 'swr'
import { api } from '../services/api'

export function useSwr(url: any) {
  const { data, error } = useSWR(url, api)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}
