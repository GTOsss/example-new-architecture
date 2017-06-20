import React from 'react'
import HeaderComponent from '../components/header'

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isDropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    });
  }


  render() {
    return <HeaderComponent toggle={this.toggle} isDropdownOpen={this.state.isDropdownOpen} />
  }
}

export default Header
