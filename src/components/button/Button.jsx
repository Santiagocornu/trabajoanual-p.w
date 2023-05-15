import React, { Component } from 'react';

class Boton extends Component {
  handleClick = () => {
    // Acciones a realizar cuando se hace clic en el botón
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Texto del botón
      </button>
    );
  }
}

export default Boton;
