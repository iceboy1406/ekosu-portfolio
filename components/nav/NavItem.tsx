import React, { FC, ReactNode } from 'react'
interface NavItemProps {
    show: boolean
    children: ReactNode
}
const NavItem:FC<NavItemProps> = ({show, children}) => {
  return (
    <div className={`${show ? 'flex flex-col gap-2' : 'hidden'} lg:flex lg:flex-row lg:items-center lg:gap-4`}>{children}</div>
  )
}

export default NavItem