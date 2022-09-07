import React from 'react'
import { ItemType } from '../../db/db'
import Button from '../Button/Button'
import style from './Cart.module.css'

type CartPropsType = {
    cartItems: ItemType[],
    onCheckout: () => void
}

function Cart({ cartItems, onCheckout }: CartPropsType) {

    const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
    let isFilled = cartItems.length;
    let buttonTitle = isFilled ? 'Checkout' : 'Order!';
    return (
        <div className={style.cartContainer}>
            {cartItems.length === 0 ? "No items in cart" : ""}
            <br />
            <span className=''>Total Price: ${totalPrice.toFixed(2)}</span>
            <Button title={buttonTitle} type={'checkout'} isDisabled={cartItems.length === 0 ? true : false} onClick={onCheckout} />
        </div>
    )
}

export default Cart