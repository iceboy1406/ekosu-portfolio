import React, { FC, MouseEventHandler, ReactNode } from 'react'
interface ButtonAnchorProps {
    children: ReactNode
    onClick?: MouseEventHandler<HTMLAnchorElement>
    className?: string
    theme?: 'primary' | 'secondary'
    href?: string
    download?: any
}
const ButtonAnchor: FC<ButtonAnchorProps> = ({
    children,
    onClick,
    className = '',
    theme = 'primary',
    href,
    download,
}) => {
    const themeStyle = (() => {
        switch (theme) {
            case 'primary':
                return 'bg-indigo-500 text-white hover:bg-indigo-600'
            case 'secondary':
                return 'bg-indigo-100 text-indigo-500 hover:bg-indigo-200'
        }
    })()
    return (
        <a
        itemProp='url'
            className={`flex gap-2 justify-center px-7 py-3 rounded transition-all duration-300 ${themeStyle} ${className}`}
            href={href}
            download={download}
            onClick={onClick}
        >
            {children}
        </a>
    )
}

export default ButtonAnchor
