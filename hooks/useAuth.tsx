"use client"

import { useState, useEffect, createContext, useContext, type ReactNode, type FC } from 'react'
import { useRouter } from 'next/navigation'

export interface User {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
  token: string
}

// export interface AuthContextType {
//   user: User | null
//   loading: boolean
//   login: (username: string, password: string) => Promise<void>
//   logout: () => void
//   error: string | null
// }

export interface AuthContextType {
  user: User | null | undefined
  loading: boolean
  login: (username: string, password: string) => Promise<void>
  logout: () => void
  error: string | null
}

// const AuthContext = createContext<AuthContextType>({
//   user: null,
//   loading: true,
//   login: async () => {},
//   logout: () => {},
//   error: null,
// })

const AuthContext = createContext<AuthContextType>({
  user: undefined,
  loading: true,
  login: async () => { },
  logout: () => { },
  error: null,
})

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  // const [user, setUser] = useState<User | null>(null)
  const [user, setUser] = useState<User | null | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const storedUser = localStorage.getItem('user')
  //     if (storedUser) {
  //       try {
  //         setUser(JSON.parse(storedUser) as User)
  //       } catch (e) {
  //         console.error('Failed to parse user data:', e)
  //         localStorage.removeItem('user')
  //       }
  //     }
  //   }
  //   setLoading(false)
  // }, [])

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser) as User)
      } catch {
        localStorage.removeItem('user')
        setUser(null)
      }
    } else {
      setUser(null)
    }
    setLoading(false)
  }, [])

  const login = async (username: string, password: string): Promise<void> => {
    try {
      setError(null)
      setLoading(true)

      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 30,
        })
      })

      if (!response.ok) {
        throw new Error('Invalid credentials')
      }

      const data = await response.json()

      setUser(data as User)
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(data))
        localStorage.setItem('token', data.token)
      }

      router.push('/')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed')
      throw err
    } finally {
      setLoading(false)
    }
  }

  const logout = (): void => {
    setUser(null)
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
    }
    router.push('/login')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  return context
}