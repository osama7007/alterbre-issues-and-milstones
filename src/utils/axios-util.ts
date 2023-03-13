import axios from "axios"
import { AxiosResponse, AxiosRequestConfig } from "axios"
import Cookies from "js-cookie"
import i18n from "../i18n"

// const baseURL = import.meta.env.VITE_BASE_URL || "https://erb.alexon.live/"
// const baseURL = "https://jiovaniaff.com/"
// const baseURL = "https://elfatha.alexon.live/"
const baseURL = "http://localhost:3600/"
const lang = i18n.language.startsWith("ar") ? "ar" : "en"

const client = axios.create({
  baseURL,
  headers: {
    // Authorization: `Bearer ${authCookie}`,
    "Content-Type": `application/json`,
    // "Content-Type": `multipart/form-data`,
    // 'Connection': 'keep-alive',
    "Accept-Language": lang,
    // "ngrok-skip-browser-warning": true
  },
})

export const request = async <T>(options: AxiosRequestConfig): Promise<T> => {
  const authCookie = Cookies.get("auth")
  const onSuccess = (response: AxiosResponse) => response.data
  // const onError = (error: AxiosError) => error
  return await client({
    ...options,
    headers: { Authorization: `Bearer ${authCookie}` },
  }).then(onSuccess)
}
