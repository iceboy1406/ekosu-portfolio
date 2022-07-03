import React, { FC, ReactNode, useEffect, useState } from 'react'
interface NavLinkProps {
    target: string
    children: ReactNode
}
const NavLink: FC<NavLinkProps> = ({ children, target }) => {
    const [isActive, setIsActive] = useState<boolean>(false)
    const headerHeight = 92
    useEffect(() => {
        const targetElement = document.querySelector<HTMLElement>(target)
        if (targetElement) {
            if(target === '#banner') {
                setIsActive(true)
            }
            window.addEventListener('scroll', () => {
                if (
                    window.scrollY + headerHeight >
                        targetElement.offsetTop - headerHeight &&
                    window.scrollY <
                        targetElement.offsetTop +
                            targetElement.clientHeight -
                            headerHeight -
                            24
                ) {
                    setIsActive(true)
                } else {
                    setIsActive(false)
                }
            })
        }
    }, [target])
    return (
        <a
            href={target}
            className={` text-xl ${
                isActive
                    ? 'font-semibold text-indigo-500 dark:text-indigo-500'
                    : 'text-gray-500 dark:text-white/[.75] dark:hover:text-indigo-500'
            } hover:text-indigo-500`}
            onClick={(e) => {
                e.preventDefault()
                if (document && window) {
                    const targetElement =
                        document.querySelector<HTMLElement>(target)
                    if (targetElement) {
                        window.scrollTo(
                            0,
                            targetElement.offsetTop - headerHeight
                        )
                    }
                }
            }}
        >
            {children}
        </a>
    )
}

export default NavLink
