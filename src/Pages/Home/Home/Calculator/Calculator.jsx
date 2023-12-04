import { FaArrowsLeftRight } from "react-icons/fa6";
import { useState } from "react";
import CircularSlider from "@fseehawer/react-circular-slider";
import { useEffect } from "react";

const Calculator = () => {
const [initialCost, setInitialCost] = useState(6);
const [numberOfInvoices, setNumberOfInvoices] = useState(0);
const [result, setResult] = useState(0);

// Calculate savings based on the corrected formula
const calculateSavings = () => {
  return (initialCost -3) * numberOfInvoices + (numberOfInvoices * 0.01);
};

 useEffect(() =>{
    setResult(calculateSavings())
 },[initialCost,numberOfInvoices])

  return (
    <div className="bg-[#009f72] text-white">
      <div className="max-w-screen-2xl mx-auto lg:px-24 md:px-5 px-5 overflow-x-hidden py-12 text-center">
        <h2 className="text-2xl">Average Invoice Processing<br /> Cost ($SGD)</h2>

        <input onChange={e => setInitialCost(e.target.value)} type="number" value={initialCost} placeholder="6" className="rounded-md border-b-4 py-1.5 text-[#fff] text-center text-2xl font-bold bg-[#009f72] shadow-sm ring-0 ring-inset ring-[#009f72] placeholder:text-[#fff] focus:ring-none focus:ring-[#fff] sm:leading-10 mb-6" />
        <div className="border-2 mx-auto w-80 h-80 p-3 rounded-full circle-slider-container">
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

        <h1 className="m-20">{result}</h1>
      </div>
    </div>


    // <div>
    //   <h2>Invoice Processing Cost Calculator</h2>
    //   <div>
    //     <label>
    //       Initial Cost per Invoice:
    //       <input
    //         type="number"
    //         value={initialCost}
    //         onChange={(e) => setInitialCost( parseInt(e.target.value))}
    //       />
    //     </label>
    //   </div>
    //   <div>
    //     <label>
    //       Number of Invoices per Month:
    //       <input
    //         type="number"
    //         value={numberOfInvoices}
    //         onChange={(e) => setNumberOfInvoices( parseInt(e.target.value))}
    //       />
    //     </label>
    //   </div>
    //   <div>
    //     <p>
    //       If initial cost per invoice is {initialCost}, and the number of invoices is {numberOfInvoices},
    //       you can save ${calculateSavings()}.
    //     </p>
    //   </div>
    // </div>
  );
};

export default Calculator;
