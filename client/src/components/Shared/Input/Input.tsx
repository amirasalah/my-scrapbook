import React, { FC } from 'react'
import { inputInterface } from '../../../interfaces'

const Input: FC<inputInterface> = ({
    name,
    handleChange,
    label,
    half,
    autoFocus,
    type,
    handleShowPassword,
}) => (
    <input
        name={name}
        onChange={handleChange}
        required
        autoFocus={autoFocus}
        type={type}
    />
)

export default Input
