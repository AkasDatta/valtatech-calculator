import { FaArrowsLeftRight } from "react-icons/fa6";
import { useState, useEffect } from "react";
import CircularSlider from "@fseehawer/react-circular-slider";
import './Calculator.css';

const Calculator = () => {
  const [initialCost, setInitialCost] = useState(6);
  const [numberOfInvoices, setNumberOfInvoices] = useState(0);
  const [result, setResult] = useState(0);
  const numberOfPoints = 10;
  const radius = 120; // Increase the radius for a larger circle
  const center = { x: 60, y: 60 };

  const calculateSavings = () => {
    return (initialCost - 3) * numberOfInvoices + numberOfInvoices * 0.01;
  };

  useEffect(() => {
    setResult(calculateSavings());
  }, [initialCost, numberOfInvoices]);

  const calculatePointPosition = (index) => {
    const startingAngle = -90;
    const angle = ((index * (360 / numberOfPoints)) + startingAngle) * (Math.PI / 180);
    const x = center.x + radius * Math.cos(angle);
    const y = center.y + radius * Math.sin(angle);
    return { x, y };
  };

  return (
    <div className="bg-[#009f72] text-white">
      <div className="max-w-screen-2xl mx-auto lg:px-24 md:px-5 px-5 overflow-x-hidden py-12 text-center">
        <h2 className="text-2xl">Average Invoice Processing<br /> Cost ($SGD)</h2>
        <input onChange={e => setInitialCost(e.target.value)} type="number" value={initialCost} placeholder="6" className="rounded-md border-b-4 py-1.5 text-[#fff] text-center text-2xl font-bold bg-[#009f72] shadow-sm ring-0 ring-inset ring-[#009f72] placeholder:text-[#fff] focus:ring-none focus:ring-[#fff] sm:leading-10 mb-6" />

        <div className="border-2 mx-auto w-80 h-auto p-3 rounded-full circle-slider-container">
          <div className="circle-slider-outer">
                <CircularSlider
                    label="savings"
                    min={0}
                    max={10000}
                    dataIndex={0}
                    prependToValue="$"
                    appendToValue="K"
                    labelColor="#fff"
                    labelBottom={true}
                    knobColor="#eeeeee"
                    knobSize={72}
                    progressColorFrom="#fff"
                    progressColorTo="#fff"
                    progressSize={5}
                    trackColor="#eeeeee"
                    trackSize={5}
                    continuous={{interval:100}}
                    onChange={ value => { setNumberOfInvoices(value)} }
                >
                    <FaArrowsLeftRight className="text-2xl text-black" x='24' y='24' width='32px' height='32px' />
                </CircularSlider>
          </div>
        </div>
        <h1 className="m-28">{result}</h1>
      </div>
    </div>
  );
};

export default Calculator;
