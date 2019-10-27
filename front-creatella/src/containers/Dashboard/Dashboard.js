import React, { Component } from 'react';
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
        <ul>
        {icons.map(icon => <li key={icon.id}>{icon.face}</li> )}
        </ul>
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