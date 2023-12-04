import './Calculator.css';

const Calculator = () => {
  const numberOfPoints = 10; // You can adjust the number of points as needed
  const radius = 50; // You can adjust the radius as needed
  const center = { x: 60, y: 60 }; // You can adjust the center coordinates as needed

  const calculatePointPosition = (index) => {
    // Adjust the starting angle to ensure 0 position is at 0 degrees
    const startingAngle = -90; // -90 degrees puts 0 at the top
    const angle = ((index * (360 / numberOfPoints)) + startingAngle) * (Math.PI / 180);
    const x = center.x + radius * Math.cos(angle);
    const y = center.y + radius * Math.sin(angle);
    return { x, y };
  };

  return (
    <div className="circle-container">
      <div className="circle">
        {Array.from({ length: numberOfPoints }).map((_, index) => {
          const position = calculatePointPosition(index);
          return (
            <div key={index} className="number" style={{ left: position.x, top: position.y }}>
              {index * 1000}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calculator;
