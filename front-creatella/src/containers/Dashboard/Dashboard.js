import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import IconList from '../../components/IconsList/IconList';
import SortPanel from '../../components/SortPanel/SortPanel';
import Spinner from '../../components/Spinner/Spinner';
import ShoppingButton from '../../components/ShoppingButton/ShoppingButton';
import ModalCart from '../../components/ModalCart/ModalCart';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.M = window.M
  }

  componentDidMount() {
    this.props.onGetIcons();

    const elems1 = document.querySelectorAll(".modal");
    this.M.Modal.init(elems1);
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
      isLoading,
      iconsAdded
     } = this.props;
     console.log('IconsAdded', iconsAdded );
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
          { (!isLoading && idSelected) && <IconList icons={sortById} M={this.M} />}
          { (!isLoading && priceSelected) && <IconList icons={sortByPrice} M={this.M} /> }
          { (!isLoading && sizeSelected) && <IconList icons={sortBySize} M={this.M} /> }
          { (!isLoading && dateSelected) && <IconList icons={sortByDate} M={this.M} /> }
        </div>

        <ShoppingButton />
        <ModalCart icons={iconsAdded} />

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
    isLoading: state.icons.isLoading,
    iconsAdded: state.icons.iconsAdded,
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