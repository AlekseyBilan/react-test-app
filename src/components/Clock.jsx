import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
      console.log('componentDidMount !!');
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }

    render() {
      return (
        <div>
          <h1>Привет, мир!</h1>
          <h2>Сейчас {(this.state && this.state.date) ? this.state.date.toLocaleTimeString() : 'no date'}.</h2>
        </div>
      );
    }
  }
  export default Clock;