import React, { useEffect, useState } from 'react'
import { BsMoonStars, BsSun } from 'react-icons/bs'
const ThemeSwitch = () => {
    const [isDark, setIsDark] = useState(false)
    useEffect(() => {
        window.addEventListener('resize', () => {
            if(document.querySelector('html')?.classList.contains('dark')) {
                setIsDark(true)
            } else {
                setIsDark(false)
            }
        })
    }, [])
    return (
        <button 
        aria-label='Theme Switcher'
            className="text-2xl text-gray-600 dark:text-white"
            onClick={() => {
                setIsDark(!isDark)
                document
                    .querySelector<HTMLElement>('html')
                    ?.classList.toggle('dark')
            }}
        >
            {isDark ? <BsMoonStars /> : <BsSun />}
        </button>
    )
}

export default ThemeSwitch
