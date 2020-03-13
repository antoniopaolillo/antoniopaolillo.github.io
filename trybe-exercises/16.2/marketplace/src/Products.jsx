import React from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import data from './data';
import './products.css';

class Products extends React.Component {
  findPrice(products) {
    const price = products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0,
    );
    return price.toFixed(2);
  }
  render() {
    return (
      <div>
        <div data-testid="price">
          TOTAL PRICE: {this.findPrice(this.props.products)}
        </div>
        <div className="container" data-testid="container">
          {data.map((product) => (
            <Product key={product.name} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state,
});

export default connect(mapStateToProps)(Products);
