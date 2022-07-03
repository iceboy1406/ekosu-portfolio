import React, { FC } from 'react'
interface SectionDescriptionProps {
    value: string
    className?: string
}
const SectionDescription: FC<SectionDescriptionProps> = ({
    value,
    className = '',
}) => {
    return <p className={`text-xl text-gray-600 ${className}`}>{value}</p>
}

export default SectionDescription
