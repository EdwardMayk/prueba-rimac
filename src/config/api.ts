import dotenv from 'dotenv'

dotenv.config()

export const api = {
  url: process.env.API_URL,
  endpoints: {
    plans: '/plans.json',
    user: '/user.json',
  },
}
