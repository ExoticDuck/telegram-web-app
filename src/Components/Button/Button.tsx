import React from 'react'
import style from './Button.module.css';

type ButtonProps = {
    type: "add" | "remove" | "checkout",
    title: string,
    isDisabled: boolean,
    onClick: () => void
}

function Button({ type, title, isDisabled, onClick}: ButtonProps) {
    let className = style.btn;
    if (type === "add") {
        className = `${style.button} ${style.add}`
    } else if (type === "remove") {
        className = `${style.button} ${style.remove}`
    } else if (type === "checkout") {
        className = `${style.button} ${style.checkout}`
    }
    return (
        <button className={className} disabled={isDisabled} onClick={onClick}>{title}</button>
    )
}

export default Button;