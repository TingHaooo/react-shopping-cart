import React, { Component } from 'react';
import FilterButton from './FilterButton'
import { connect } from 'react-redux'
import { addFilter, removeFilter} from '../../store/actions/filterActions'

class Filter extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (filter, type, checkState) => {
    const { filters, addFilter, removeFilter } = this.props;
    // state true -> add to filters (checked)
    // state false -> remove from filters (unchecked)
    checkState ?
    // add filter
    addFilter(filter, type)
    :
    //remove filter
    removeFilter(filter, type)
  }

  render() {
    const filters = {
      styles: ['men', 'lady'],
      colors: ['yellow', 'pink', 'gray', 'blue', 'black']
    }
    // Map styles to filter buttons
    const stylesButtonList = filters.styles.map((style) => {
      return (
        <FilterButton
          filter={style}
          type="style"
          // Pass method to button to get specific information
          handleCheckboxChange={this.handleClick}
          key={style}
        />
      )
    });
    // Map colors to filter buttons
    const colorButtonList = filters.colors.map((color) => {
      return (
        <FilterButton
          filter={color}
          type="color"
          // Pass method to button and get specific information
          handleCheckboxChange={this.handleClick}
          key={color}
        />
      )
    });
    return (
      <div className="filter">
        <div className="filter__row">
          {stylesButtonList}
        </div>
        <h3 className="filter__title">Color</h3>
        <div className="filter__row">
          {colorButtonList}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addFilter: (filter, type) => dispatch(addFilter(filter, type)),
    removeFilter: (filter, type) => dispatch(removeFilter(filter, type))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter) ;
