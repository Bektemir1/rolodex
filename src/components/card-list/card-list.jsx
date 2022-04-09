import React from 'react';
import './card-list.css'
import {Card} from '../card/card'

export const CardList = (props)=>{
  
    return (
        <div className='card-list'>
            {
            props.monsters.map((item )=>{
               return <Card key={item.id} monster={item}/>
            })
            }
        </div>
    )
} 