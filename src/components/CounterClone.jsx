import logProps from "../hoc/log-props";

function CounterClone({ count, onCountUp, onCountDown, countUpText, countDownText }) {
  
  return (
    <div className="counter btn-group">
      <button className="btn btn-danger btn-lg" onClick={onCountDown}>{countDownText}</button>
      <span className="btn btn-secondary btn-lg active">{count}</span>
      <button className="btn btn-success btn-lg" onClick={onCountUp}>{countUpText}</button>
    </div>
  );
}

export default logProps(CounterClone);