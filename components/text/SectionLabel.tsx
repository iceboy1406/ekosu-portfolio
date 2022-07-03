import React, { FC } from 'react'
interface SectionLabelProps {
    value: string
    className?: string
}
const SectionLabel: FC<SectionLabelProps> = ({ value, className = '' }) => {
    return (
        <p
            className={`text-indigo-500 text-2xl font-semibold font-source-sans ${className}`}
        >
            {value}
        </p>
    )
}

export default SectionLabel
