import React from 'react';

function Item(props) {
    const {item} = props;
  
    //console.log(item.MainImage.url_570xN)

    return  <div key={item.listing_id} class="item">
                 <div class="item-image">
                    <a href={item.url}>
                        <img src="https://img1.etsystatic.com/156/0/12814579/il_570xN.1173240751_50hv.jpg"/>
                    </a>
                 </div>
                 <div class="item-details">
                    <p class="item-title">{String(item.title).length > 50? String(item.title).substring(0, 50) + ".." : item.title}</p>
                    <p class="item-price">{String(item.currency_code)=="USD"?"$":String(item.currency_code)=="EUR"?"€":"GBP"}{item.price}</p>
                    <p class={Number(item.quantity)<10?"item-quantity level-low":Number(item.quantity)<20?"item-quantity level-medium":"item-quantity level-high"} >{item.quantity} left</p>
                 </div>
            </div>

}

export default Item;
/*"item-quantity level-medium"*/