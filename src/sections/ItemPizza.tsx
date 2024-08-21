import React, { Component } from 'react'
import { Pizza } from '../models/pizza.model'

type Props = Pizza & {
    handlerChangePerson : (data : Pizza) => void;
}
const ItemPizza =({
    title,
descriptions,
handlerChangePerson
} : Props) =>{
return(
    <div>
        <div>{title}</div>
        <div>{descriptions}</div>
        <button onClick={()=> handlerChangePerson({title :'minh',descriptions :'abcdefg'})}>Changer person infomation</button>
    </div>
)
}
export default ItemPizza