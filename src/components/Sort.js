import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectSort } from '../store/actions/sortActions'

class Sort extends Component {
  constructor(props) {
    super(props)
  }

  handleChange = (e) => {
    // Get the order from sorting method selector
    const order = e.currentTarget.value;
    // Get the dispatch method from props
    const { selectSort } = this.props;
    // dispatch action
    selectSort(order)
  }

  render() {
    return (
      <div className="sort">
        <label htmlFor="price_sort">Sort by</label>
        <select id="price_sort" onChange={this.handleChange}>
          <option value="l-h">Lowest to Hightest</option>
          <option value="h-l">Hightest to Lowest</option>
        </select>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sort: state.sort.order
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectSort: (order) => dispatch(selectSort(order))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
