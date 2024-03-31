import { ThemeProvider } from '@/components/theme-provider'
import React from 'react'

export default function GlobalProvider({children}:{children:React.ReactNode}) {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}
