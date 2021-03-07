import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='svgs/109617.svg'
              text='Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.'
              label='Step 1'
              path='/services'
            />
            <CardItem
              src='svgs/109617.svg'
              text='Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.'
              label='Step 2'
              path='/services'
            />
             <CardItem
              src='svgs/109617.svg'
              text='Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.'
              label='Step 3'
              path='/services'
            />
            
          </ul>
          <ul className='cards__items'>
         
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;