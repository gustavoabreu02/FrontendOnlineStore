import React from 'react';

class ListProducts extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      nameImput: '',
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { nameImput } = this.state;
    return (
      <div>
        {this.renderiza}
        <input name="nameImput" value={ nameImput } onChange={ this.onInputChange } />
      </div>
    );
  }
}
export default ListProducts;
