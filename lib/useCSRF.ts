'use client'

import { useState, useEffect, useCallback } from 'react'

export function useCSRF() {
  const [csrfToken, setCsrfToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchToken = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/csrf')
      if (res.ok) {
        const data = await res.json()
        setCsrfToken(data.csrfToken)
      }
    } catch (error) {
      console.error('CSRF token fetch error:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchToken()
  }, [fetchToken])

  // CSRF header'lı fetch wrapper
  const csrfFetch = useCallback(
    async (url: string, options: RequestInit = {}) => {
      const headers = new Headers(options.headers)
      if (csrfToken) {
        headers.set('x-csrf-token', csrfToken)
      }
      
      return fetch(url, {
        ...options,
        headers,
      })
    },
    [csrfToken]
  )

  return {
    csrfToken,
    loading,
    csrfFetch,
    refreshToken: fetchToken,
  }
}
