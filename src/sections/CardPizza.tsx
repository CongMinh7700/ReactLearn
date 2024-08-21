import React, { useState } from 'react'
import LogoDoreamon from '../assets/1.png'
import { Pizza } from '../models/pizza.model';

type Props =Pizza &{
    handlerRemovePerson : (id : number) => void;
};

const CardPizza =({id,title,descriptions,handlerRemovePerson}:Props) =>{
    return (
        <div className="card-items" onClick={()=>handlerRemovePerson(id!)}>
            <img className='card-image-pizza' src={LogoDoreamon} alt="pizza" />
            <div style={{ height: '50px', width: '100%' }}></div>
            <div className='card-content'>
                <div>
                    <div style={{ fontSize: '20px', fontWeight: 600, color: 'red' }}>
                        {title}
                    </div>
                    <div style={{ fontSize: '20px', fontWeight: 600, color: '#69f542', marginTop: '.5rem' }}>
                        {descriptions}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CardPizza