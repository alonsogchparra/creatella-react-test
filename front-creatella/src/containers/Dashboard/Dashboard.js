import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import IconList from '../../components/IconsList/IconList';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class Dashboard extends Component {

  componentDidMount() {
    this.props.onGetIcons();
  }

  render () {
    const { icons } = this.props;
    return (
      <div>
        <Header />
        <div className="container">
          <IconList icons={icons} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    icons: state.icons.icons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetIcons: () => dispatch(actions.getIcons())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);