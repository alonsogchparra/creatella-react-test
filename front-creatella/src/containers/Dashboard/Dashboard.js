import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import IconList from '../../components/IconsList/IconList';
import SortPanel from '../../components/SortPanel/SortPanel';
import Spinner from '../../components/Spinner/Spinner';
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
      sortByPrice,
      sortBySize,
      sortByDate,
      sortById,
      priceSelected,
      sizeSelected,
      idSelected,
      dateSelected,
      isLoading
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
          { isLoading && <Spinner /> }
          { (!isLoading && idSelected) && <IconList icons={sortById} />}
          { (!isLoading && priceSelected) && <IconList icons={sortByPrice} /> }
          { (!isLoading && sizeSelected) && <IconList icons={sortBySize} /> }
          { (!isLoading && dateSelected) && <IconList icons={sortByDate} /> }
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
    idSelected: state.icons.idSelected,
    isLoading: state.icons.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetIcons: () => dispatch(actions.getIcons()),
    onSortByPrice: () => dispatch(actions.getSortByPrice()),
    onSortBySize: () => dispatch(actions.getSortBySize()),
    onSortById: () => dispatch(actions.getSortById()),
    onSortByDate: () => dispatch(actions.getSortByDate())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);