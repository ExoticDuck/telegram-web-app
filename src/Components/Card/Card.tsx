import React, { useCallback, useState } from 'react'
import { ItemType } from '../../db/db'
import Button from '../Button/Button'
import style from './Card.module.css'

type CardPropsType = {
    food: ItemType
    onAdd: (food: ItemType) => void
    onRemove: (food: ItemType) => void
}

function Card({ food, onAdd, onRemove }: CardPropsType) {
    const [count, setCount] = useState<number>(0);
    const [incDesabled, setIncDesabled] = useState(false);
    const [decDesabled, setDecDesabled] = useState(true);

    const { title, image, price, id } = food;

    let className = style.cardBadgeHidden;

    if (count !== 0) {
        className = style.cardBadge;
    }

    let handleIncrement = () => { 
        setCount(count + 1);
        setDecDesabled(false);
        onAdd(food);
    };
    let handleDecrement = () => {
        setCount(count - 1);
        onRemove(food);
    };
    return (
        <div className={style.card}>
            <span className={className}>{count}</span>
            <div className={style.imageContainer}>
                <img src={image} alt={title} />
            </div>
            <h4 className={style.cardTitle}>
                {title}.
                <span className={style.cardPrice}>{price}</span>
            </h4>
            <div className={style.buttonContainer}>
                <Button title='+' type={"add"} onClick={handleIncrement} isDisabled={incDesabled} />
                {count !== 0 && <Button title='-' type={"remove"} onClick={handleDecrement} isDisabled={decDesabled} />}
            </div>
        </div>
    )
}

export default Card