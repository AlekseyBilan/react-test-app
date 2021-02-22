import './Button.css';

function Button(props) {
    function clickHandler(e) {
        console.log('По кнопке кликнули.', e);
        props.clickHandler(e);
    }
  return (
    <button className='btn' onClick={clickHandler}>
        {props.text}
    </button>
  );
}

export default Button;