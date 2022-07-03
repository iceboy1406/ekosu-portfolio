import React, { FC, ReactNode } from 'react'
interface ContainerProps {
    children: ReactNode
}
const Container: FC<ContainerProps> = ({ children }) => {
    return (
        <div className="px-7 flex justify-center">
            <div className="w-full sm:max-w-lg lg:max-w-5xl 2xl:max-w-7xl">{children}</div>
        </div>
    )
}

export default Container
