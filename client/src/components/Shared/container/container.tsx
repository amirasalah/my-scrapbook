import { FC } from 'react'
import { childrenInterface } from '../../../interfaces'

const Container: FC<childrenInterface> = ({ children, ...restProps }) => (
    <div className={`container ${restProps.className}`}>{children}</div>
)

export default Container
