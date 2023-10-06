import React from 'react'
import './Subtotal.css'
import {IntlProvider, FormattedNumber } from 'react-intl';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
  const [{basket},dispatch] = useStateValue();
 
 
  return (
    <IntlProvider locale="en">
    <div className='subtotal'>
      <p> 
      Subtotal ({basket.length} items) :
        <strong>  
          <FormattedNumber value={getBasketTotal(basket)}  style="currency" currency="USD"/>
        </strong>
       
      </p>
      
      <small className='subtotal_gift'>
        <input type="checkbox" /> This order contains a gift
      </small>
      <button>Proceed to Checkout</button>
    </div>
    
    </IntlProvider>

   


  )
}

export default Subtotal
