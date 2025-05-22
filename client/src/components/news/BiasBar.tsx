
type BiasBarProps = {
  left: number;
  center: number;
  right: number;
};

const BiasBar = ({ left, center, right }: BiasBarProps) => {
  return (
    <div>
      <div className="flex text-xs mb-1">
        <div className="flex-1 text-left">L</div>
        <div className="flex-1 text-center">C</div>
        <div className="flex-1 text-right">R</div>
      </div>
      
      <div className="flex h-4 rounded overflow-hidden">
        <div 
          className="bg-blue-500" 
          style={{ width: `${left}%` }}
        ></div>
        <div 
          className="bg-gray-500" 
          style={{ width: `${center}%` }}
        ></div>
        <div 
          className="bg-red-500" 
          style={{ width: `${right}%` }}
        ></div>
      </div>
      
      <div className="flex text-xs mt-1">
        <div className="flex-1 text-left">{left}%</div>
        <div className="flex-1 text-center">{center}%</div>
        <div className="flex-1 text-right">{right}%</div>
      </div>
    </div>
  );
};

export default BiasBar;
