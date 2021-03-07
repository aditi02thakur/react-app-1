import React from 'react';
import '../../App.css';

import { Button } from '../Button';

export default function Services() {
  return (
  	<>
  	<p className='services'>Web Design Web Development by SB
  	</p>
  	<div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
  	</>
  	);
}