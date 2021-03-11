import React from 'react';

function logProps (Component) {
    class LogProps extends React.Component {
        componentWillReceiveProps(nextProps) {
            console.log('prevProps', this.props);
            console.log('nextProps', nextProps);
        }

        render() {
            //{...this.props}  развёртывание для передачи всех пропсов дальше во входящий компонент компонет
            return <Component {...this.props} />;
        }
    }

    LogProps.displayName = `LogProps(${Component.displayName || Component.name || 'Component'})`;
    return LogProps;
}

export default logProps;