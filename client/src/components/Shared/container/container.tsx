import { FC } from 'react'

const Container: FC<any> = ({ children, ...restProps }) => (
    <div className={`container ${restProps.className}`}>{children}</div>
)

export default Container
