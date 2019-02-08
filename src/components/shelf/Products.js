import React, { Component, Fragment} from 'react';
import ProductSummary from './ProductSummary'
import { connect } from 'react-redux'
import { fetchProductAction } from '../../store/actions/productActions'
import Spinner from '../Spinner'
import Sort from '../Sort'
import { compare } from '../../util'

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  filter = (products, filters) => {
    // For key of filters, filter product
    Object.keys(filters).forEach(type => {
      // If type(color, style) exist
      if (filters[type].length !== 0) {
        products = products.filter(product => filters[type].indexOf(product[type]) > -1 )
      }
    })
  return products;
  }
  // After loading, set loading state to false to cancel loading animation
  componentDidMount = () => {
    this.props.fetchProduct( () => {this.setState({loading: false})} )
  }

  render() {
    const { products, filters, sortingMethod } = this.props;
    // filter and sort products
    var sortedFilteredProducts = this.filter(products, filters).sort(compare(sortingMethod));
    // Map products to product summary
    const productList = sortedFilteredProducts.map(product => {
      return (
        <ProductSummary product={product} key={product._id} sort={sortingMethod}/>
      )
    });
    return (
      <Fragment>
        <div className="products">
          {this.state.loading && <Spinner />}
          <Sort />
          {productList}
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.items,
    filters: state.filters,
    sortingMethod: state.sort.order
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: (callback) => { dispatch(fetchProductAction(callback)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
