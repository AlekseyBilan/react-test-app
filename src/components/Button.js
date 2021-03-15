import './Button.css';

function Button(props) {
    function clickHandler(e) {
        //e.preventDefault();
        //console.log('По кнопке кликнули.', e);
        props.clickHandler();
    }
  return (
    <button className='btn' onClick={clickHandler}>
        {props.text}
    </button>
  );
}

export default Button;