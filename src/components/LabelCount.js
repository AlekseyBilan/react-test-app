import './LabelCount.css';

function LabelCount(props) {
  return (
    <label className='label-count' title={props.title}>
        {props.number}
    </label>    
  );
}

export default LabelCount;