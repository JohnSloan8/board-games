// Spinner.tsx
import { Loader } from "lucide-react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner">
      <Loader size={24} className="spinner-icon" />
    </div>
  );
};

export default Spinner;
