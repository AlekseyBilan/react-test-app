import React, { Component } from 'react';

import Counter from './Counter';
import DoubleCounterWrap from './DoubleCounterWrap';

class CounterWrap extends Component {
  state = {
    count: 0
  };

  render() {
    const { count } = this.state;

    return (
      <div className="container">
        <Counter count={count}
                countDownText='-'
                countUpText='+'
                onCountUp={() => this.setState({ count: count + 1 })}
                onCountDown={() => this.setState({ count: count - 1 })} />
        <DoubleCounterWrap/>
      </div>
    );
  }
}

export default CounterWrap;