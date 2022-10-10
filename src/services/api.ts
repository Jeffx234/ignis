import axios from 'axios'
import cookies from 'js-cookie'

export const api = axios.create({
  baseURL: 'https://teste.ignisdigital.tec.br',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${cookies.get('ignis_v')}`,
  },
})
