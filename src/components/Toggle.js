import React from 'react';

//HOC
// Эта функция принимает компонент...
function Toggle(WrappedComponent, selectData) {
    // ...и возвращает другой компонент...
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {isToggleOn: false};
            this.handleClick = this.handleClick.bind(this);
        }
  
        handleClick() {
            this.setState(state => ({
                isToggleOn: !state.isToggleOn
            }));
        }
  
      render() {
        // ... и рендерит оборачиваемый компонент со свежими данными!
        // Обратите внимание, что мы передаём остальные пропсы
        return <WrappedComponent state={this.state} {...this.props} />;
      }
    };
  }
  
export default Toggle;