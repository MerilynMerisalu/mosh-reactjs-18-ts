import React from 'react'
interface IProps {
    children : string,
    color?: "primary" | "secondary" | "danger"
    onClick: () => void
}
const Button = ({children, color = "primary", onClick}: IProps) => {
    
    
  return (
    <button className={'btn btn-' + color} onClick={onClick}>{children}</button>
  )
}

export default Button