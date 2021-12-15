/* eslint-disable */ 
import React, {
    memo,
    useState,
    useEffect,
  } from "react";
import './RangeSelector.css';
  
  const RangeSelector = memo(
    ({ classes, onChange, value, ...sliderProps }) => {
      const [sliderVal, setSliderVal] = useState(0);
      const [mouseState, setMouseState] = useState(null);
  
      useEffect(() => {
        setSliderVal(value);
      }, [value]);
  
      const changeCallback = e => {
        setSliderVal(e.target.value);
      };
  
      useEffect(() => {
        if (mouseState === "up") {
          onChange(sliderVal);
        }
      }, [mouseState]);

      return (
        <div className="options-container">
          <p>PRICE </p>
          <input
            type="range"
            value={sliderVal}
            {...sliderProps}
            className={`slider ${classes}`}
            id="myRange"
            onChange={changeCallback}
            onMouseDown={() => setMouseState("down")}
            onMouseUp={() => setMouseState("up")}
          />
          <div className="range-values">
              <span>&#8377;{sliderVal}k</span>
              <span>&#8377;30k</span>
          </div>
        </div>
      );
    }
  );
  
export default RangeSelector;
  
     