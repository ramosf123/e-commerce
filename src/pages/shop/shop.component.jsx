import React, { Component } from "react";

import CollectionPreview from "../../components/preview-collection/preview-collection.component";
import SHOP_DATA from "../../data/shop_data";

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...collectionProps }) => (
          <CollectionPreview key={id} {...collectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
