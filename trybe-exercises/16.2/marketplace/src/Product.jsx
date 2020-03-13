import React from 'react';
import ButtonsOfQuantity from './ButtonsOfQuantity';
import './products.css';
class Product extends React.Component {
  render() {
    const {
      product: { name, quantityStock, price },
    } = this.props;
    return (
      <div className="product">
        <p data-testid={name}>Nome: {name}</p>
        <p data-testid={quantityStock}>
          Quantidade em estoque: {quantityStock}
        </p>
        <p data-testid={price}>Preço: U${price}</p>
        <ButtonsOfQuantity product={{ name, quantityStock, price }} />
      </div>
    );
  }
}

export default Product;
