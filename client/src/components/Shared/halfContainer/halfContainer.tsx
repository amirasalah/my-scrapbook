import { FC } from 'react'

const HalfContainer: FC<any> = ({ children, ...restProps }) => (
    <div className={`w-1/2 ${restProps.className}`}>{children}</div>
)

export default HalfContainer
