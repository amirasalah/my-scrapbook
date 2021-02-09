import React, { FC } from 'react'
import { inputInterface } from '../../../interfaces'

const Input: FC<inputInterface> = ({
    name,
    handleChange,
    label,
    type,
    required,
}) => (
    <>
        <label>{label}</label>
        <input
            name={name}
            onChange={handleChange}
            required={required}
            type={type}
        />
    </>
)

export default Input
