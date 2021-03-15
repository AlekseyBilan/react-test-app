import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Button from './Button';

export default class Modal extends React.Component {
    constructor(props) {
      super(props);
      this.el = document.createElement('div');
      //this.el.classList.add(this.props.className);

    }

    state = {
        isModalOpen: this.props.isModalOpen
    }
    
    toggleModal = () => {
        this.setState(state => ({isModalOpen: !state.isModalOpen}))
    }

    componentDidMount() {
        document.querySelector('body').appendChild(this.el);
    }
  
    componentWillUnmount() {
        document.querySelector('body').removeChild(this.el);
    }
    
    render() {
      return ReactDOM.createPortal(

        this.state.isModalOpen ? (
          <div className={this.props.className}>
              <h2>{this.props.title}</h2>
                {this.props.children}
                <Button clickHandler={this.toggleModal} text="Closse modal"/>
          </div>
        ) : null,
        this.el
      );
    }
  }

  Modal.propTypes = {
    className: PropTypes.string.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
  };
  