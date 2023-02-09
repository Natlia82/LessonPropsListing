import React from 'react';
import Item from './item';

function Listing(props) {
    const { items } = props;
  
    const itemList = items.map((item) => <Item key={item.listing_id} item={item} />   )
   return  <div class="item-list">
              {itemList }
           </div>
}
export default Listing;