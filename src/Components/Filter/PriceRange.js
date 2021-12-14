import React, {
    useCallback,
    useState,
    useMemo
  } from "react";
import RangeSelector from "./RangeSelector";
const PriceRange = () => {
    const [parentVal, setParentVal] = useState(10);

    const sliderValueChanged = useCallback(val => {
      setParentVal(val);
    });

    const sliderProps = useMemo(
      () => ({
        min: 0,
        max: 30,
        value: parentVal,
        step: 2,
        onChange: e => sliderValueChanged(e)
      }),
      [parentVal]
    );

    return (
      <div>
        <RangeSelector {...sliderProps} classes="additional-css-classes" />
      </div>
    );
  };

export default PriceRange;
