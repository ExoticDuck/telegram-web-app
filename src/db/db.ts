import pizzaImg from '../images/pizza.png';
import burgerImg from '../images/burger.png';
import cocaImg from '../images/coca.png';
import icecreamImg from '../images/icecream1.png';
import kebabImg from '../images/kebab.png';
import saladImg from '../images/salad.png';
import waterImg from '../images/water.png';

export type ItemType = typeof item;
let item = getData()[0];

export function getData() {
    return [
        {id: 1, title: "Pizza", price: 17.99, image: pizzaImg, quantity: 0},
        {id: 2, title: "Burger", price: 4.99, image: burgerImg, quantity: 0},
        {id: 3, title: "Coca", price: 1.99, image: cocaImg, quantity: 0},
        {id: 4, title: "Icecream", price: 3.49, image: icecreamImg, quantity: 0},
        {id: 5, title: "Kebab", price: 6.22, image: kebabImg, quantity: 0},
        {id: 6, title: "Salad", price: 5.15, image: saladImg, quantity: 0},
        {id: 7, title: "Water", price: 1.33, image: waterImg, quantity: 0}
    ]
}