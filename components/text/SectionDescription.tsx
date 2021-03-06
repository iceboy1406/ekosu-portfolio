import React, { FC } from 'react'
interface SectionDescriptionProps {
    value: string
    className?: string
}
const SectionDescription: FC<SectionDescriptionProps> = ({
    value,
    className = '',
}) => {
    return <p itemProp='sectionDescription' className={`text-xl text-gray-600 dark:text-white/[.75] ${className}`}>{value}</p>
}

export default SectionDescription
