import React, { Component } from 'react';

import CounterClone from './CounterClone';

class DoubleCounterWrap extends Component {
  state = {
    count: 0
  };

  render() {
    const { count } = this.state;

    return (
      <div className="container">
        <CounterClone count={count}
                countDownText='-2'
                countUpText='+2'
                onCountUp={() => this.setState({ count: count + 2 })}
                onCountDown={() => this.setState({ count: count - 2 })} />
      </div>
    );
  }
}

export default DoubleCounterWrap;