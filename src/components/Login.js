import React from 'react';

class Login extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
            value: '',
            login: '', 
            password: ''
        };
  
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
  
    handleLoginChange(event) {
        this.setState({login: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }
  
    handleSubmit(event) {
        const login = this.state.login;
        const password = this.state.password; 
        if( login && login.length >= 3 
            && login.length <= 16
            && password
            && password !== login
            && password.length >= 3
            && password.length <= 16
        ) {
            console.log('Отправленное имя: ' + this.state.login);
            console.log('Отправленное имя: ' + this.state.password);
        }
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Введенное имя: 
            <b>{this.state.login}</b><br/>
            <b>{this.state.password}</b><br/>
            <label>
                Login:
                <input type="text" value={this.state.login} onChange={this.handleLoginChange} required/>
            </label>
            <label>
                Password:
                <input type="password" value={this.state.password} onChange={this.handlePasswordChange} required/>
            </label>
            <label>
            Выберите ваш любимый вкус:
            <select value={this.state.value} onChange={this.handleChange}>
                <option value="grapefruit">Грейпфрут</option>
                <option value="lime">Лайм</option>
                <option value="coconut">Кокос</option>
                <option value="mango">Манго</option>
            </select>
            </label>
          </label>
          <input type="submit" value="Отправить" />
        </form>
      );
    }
  }

  export default Login;