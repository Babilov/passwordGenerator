import cl from "./MyRange.module.css";

const MyRange = ({ rangeValue, setRangeValue }) => {
  const currentValue = (event) => {
    setRangeValue(event.target.value);
  };

  return (
    <div>
      <div className={cl.curr_length}>Current length: {rangeValue}</div>
      <span>7</span>
      <input
        className={cl.range}
        type="range"
        min="7"
        max="25"
        defaultValue="10"
        step="1"
        onChange={currentValue}
      />
      <span>25</span>
    </div>
  );
};

export default MyRange;
