import React from 'react';
import { connect } from 'react-redux';
import { add, remove } from './action';

class ButtonsOfQuantity extends React.Component {
  addProduct(product, products, add) {
    const { name, price, quantityStock } = product;
    const findProduct = products.find((prod) => prod.name === name);
    if (findProduct) {
      if (findProduct.quantity + 1 > quantityStock) {
        return console.log('estoque máximo atingido');
      }
      return add({ name, quantity: findProduct.quantity + 1, price });
    }
    return add({ name, quantity: 1, price });
  }

  removeProduct(product, products, remove) {
    const { name, price } = product;
    const findProduct = products.find((prod) => prod.name === name);
    if (findProduct) {
      if (findProduct.quantity - 1 < 0) {
        return console.log('não é possivel remover mais');
      }
      return remove({ name, quantity: findProduct.quantity - 1, price });
    }
    return console.log('produto não adicionado');
  }

  render() {
    const { product, products, add, remove } = this.props;
    const haveProduct = products.find((prdc) => prdc.name === product.name);
    return (
      <div>
        <button
          data-testid={`${product.name}-button-add`}
          onClick={() => this.addProduct(product, products, add)}
        >
          +
        </button>
        <p data-testid={`${product.name}-quantity`}>
          {haveProduct ? haveProduct.quantity : 0}
        </p>
        <button
          data-testid={`${product.name}-button-remove`}
          onClick={() => this.removeProduct(product, products, remove)}
        >
          -
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state,
});

const mapDispatchToProps = (dispatch) => ({
  add: (e) => dispatch(add(e)),
  remove: (e) => dispatch(remove(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsOfQuantity);
