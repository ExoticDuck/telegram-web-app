import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import { getData, ItemType } from './db/db';
import Cart from './Components/Cart/Cart';

const foods = getData();
//@ts-ignore
const telegram = window.Telegram.WebApp;

function App() {
  const [cartItems, setCartItems] = useState<ItemType[]>([]);

  useEffect(() => {
    telegram.ready();
  });

  const onAdd = (food: ItemType) => {
    const exist = cartItems.find(x => x.id === food.id);
    if(exist) {
      setCartItems(
        cartItems.map(el => {
        return el.id === food.id ? {...exist, quantity: exist.quantity + 1} : el;
      })
    )
    } else {
      setCartItems([...cartItems, {...food, quantity: 1}])
    }
  }

  const onRemove = (food: ItemType) => {
    const exist = cartItems.find(x => x.id === food.id);
    if(exist && exist.quantity === 1) {
      setCartItems(cartItems.filter(el => el.id !== food.id));
    } else if (exist) {
      setCartItems(cartItems.map(el => {
        return el.id === food.id ? {...exist, quantity: exist.quantity-1} : el;
      }))
    }
  }

  const onCheckout = () => {
    telegram.MainButton.text = "Pay :)";
    telegram.MainButton.show();
  }

  let cards = foods.map(el => <Card food={el} key={el.id} onAdd={onAdd} onRemove={onRemove}/>);
  return (
    <div>
      <h1 className='heading'>Order Food</h1>
      <Cart cartItems={cartItems} onCheckout={onCheckout}/>
      <div className='cardsContainer'>{cards}</div>
    </div>
  );
}

export default App;
