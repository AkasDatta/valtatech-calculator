import { FaArrowsLeftRight } from "react-icons/fa6";
import { useState, useEffect } from "react";
import CircularSlider from "@fseehawer/react-circular-slider";
import './Calculator.css';
import image from "../../../../assets/numbering.png"

const Calculator = () => {
  const [initialCost, setInitialCost] = useState(6);
  const [numberOfInvoices, setNumberOfInvoices] = useState(0);
  const [result, setResult] = useState(0);

  const calculateSavings = () => {
    return (initialCost - 3) * numberOfInvoices + numberOfInvoices * 0.01;
  };

  useEffect(() => {
    setResult(calculateSavings());
  }, [initialCost, numberOfInvoices]);

  return (
    <div id="circle-section" className="calculator-container">
      <div className="bg-image">
        <img src={image} alt="" />
      </div>

      <div className="max-w-screen-2xl mx-auto lg:px-24 md:px-5 px-5 overflow-x-hidden py-12 text-center">
        <h2 className="text-2xl text-white">Average Invoice Processing<br /> Cost ($SGD)</h2>
        <input onChange={e => setInitialCost(e.target.value)} type="number" value={initialCost} placeholder="6" className="rounded-md border-b-4 py-1.5 text-[#fff] text-center text-2xl font-bold bg-[#009f72] shadow-sm ring-0 ring-inset ring-[#009f72] placeholder:text-[#fff] focus:ring-none focus:ring-[#fff] sm:leading-10" />
        <div className="border-2 mx-auto w-64 h-auto p-3 rounded-full mt-12 circle-slider-container">
          <div className="circle-slider-outer">
            <CircularSlider
              label="If counted"
              min={0}
              width={220}
              max={10000}
              dataIndex={0}
            //   prependToValue="$"
            //   appendToValue="K"
              labelColor="#fff"
              labelBottom={true}
              knobColor="#eeeeee"
              knobSize={52}
              progressColorFrom="#fff"
              progressColorTo="#fff"
              progressSize={5}
              trackColor="#eeeeee"
              trackSize={5}
              continuous={{ interval: 100 }}
              onChange={value => { setNumberOfInvoices(value) }}
            >
              <FaArrowsLeftRight className="text-xl text-black" x='16' y='16' width='24px' height='24px' />
            </CircularSlider>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-8 md:mt-12 lg:mt-10">
            <div className=" text-[#fff]">
                <h2 className="lg:pt-8 md:pt-4 mt-0">INVOICES A MONTH AUTOMATED <br /> WITH FUJIFILM CAN SAVE:</h2>
                <h1 className="font-bold text-4xl">
                <span className="text-xl">$</span>{parseInt(result)}</h1>
                <h2>EACH MONTH</h2>
            </div>
            <div className=" text-[#fff] pt-6">
                <h2 className="lg:pt-8 md:pt-4 mt-0">THAT'S</h2>
                <h1 className="font-bold text-4xl">
                <span className="text-xl">$</span>{parseInt(result * 12)}
                </h1>
                <h2>EACH YEAR</h2>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
