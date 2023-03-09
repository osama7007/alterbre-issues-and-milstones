// Use Local Storage Hook
// This hook is used to store data in the local storage of the browser

import { useState } from "react"

export const useLocalStorage = (key: string, initialValue: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = (value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
    setStoredValue(value)
  }

  return [storedValue, setValue]
}
