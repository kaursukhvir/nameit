import NameCard from "./Namecard";
import "../app.css";

const Result = ({ suggestedNames }) => {
  return (
    <div className="container">
      {suggestedNames.map((suggestedName) => {
        return <NameCard name={suggestedName} />;
      })}
    </div>
  );
};

export default Result;
