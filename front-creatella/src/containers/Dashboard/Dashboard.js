import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import IconList from '../../components/IconsList/IconList';
import SortPanel from '../../components/SortPanel/SortPanel';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class Dashboard extends Component {

  componentDidMount() {
    this.props.onGetIcons();
  }

  sortedByIdHandler = () => {
    this.props.onSortById();
  }

  sortedByPriceHandler = () => {
    this.props.onSortByPrice();
  }

  sortedBySizeHandler = () => {
    this.props.onSortBySize();
  }

  sortedByDateHandler = () => {
    this.props.onSortByDate();
  }

  render () {
    const {
      icons,
      sortByPrice,
      sortBySize,
      sortByDate,
      sortById,
      priceSelected,
      sizeSelected,
      idSelected,
      dateSelected
     } = this.props;

    return (
      <div>
        <Header />
        <div className="container">
          <SortPanel
            sortByPrice={this.sortedByPriceHandler}
            sortBySize={this.sortedBySizeHandler}
            sortByDate={this.sortedByDateHandler}
            sortById={this.sortedByIdHandler}
          />
          { idSelected && <IconList icons={sortById} />}
          { priceSelected && <IconList icons={sortByPrice} /> }
          { sizeSelected && <IconList icons={sortBySize} /> }
          { dateSelected && <IconList icons={sortByDate} /> }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    icons: state.icons.icons,
    sortByPrice: state.icons.sortByPrice,
    sortBySize: state.icons.sortBySize,
    sortById: state.icons.sortById,
    sortByDate: state.icons.sortByDate,
    priceSelected: state.icons.priceSelected,
    sizeSelected: state.icons.sizeSelected,
    dateSelected: state.icons.dateSelected,
    idSelected: state.icons.idSelected
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetIcons: () => dispatch(actions.getIcons()),
    onSortByPrice: () => dispatch(actions.sortedByPrice()),
    onSortBySize: () => dispatch(actions.sortedBySize()),
    onSortById: () => dispatch(actions.sortedById()),
    onSortByDate: () => dispatch(actions.sortedByDate())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);