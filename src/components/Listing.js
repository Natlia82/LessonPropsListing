

function Listing(props) {
    const { items } = props;
    const itemList = items.map((item) => <div class="item">
                                            <div class="item-image">
                                                <a href="https://www.etsy.com/listing/292754135/woodland-fairy">
                                                    <img src="https://img1.etsystatic.com/156/0/12814579/il_570xN.1173240751_50hv.jpg"/>
                                                </a>
                                            </div>
                                            <div class="item-details">
                                                <p class="item-title">Woodland Fairy</p>
                                                <p class="item-price">$3.99</p>
                                                <p class="item-quantity level-medium">12 left</p>
                                            </div>
                                        </div> )
   return  <div class="item-list">
              {itemList }
           </div>
}
export default Listing;