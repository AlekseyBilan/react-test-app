function Greeting(props) {
    //user data
    // {userId: 12345, userName: 'User', settings: {theme: 'dark', lang: 'Eng'}};
  return (
    <section className='greeteng-wrap'>
        <h2>Hello, {props.currentUser.userName}!</h2>
    </section>
  );
}

export default Greeting;