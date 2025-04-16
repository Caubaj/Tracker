
import ProgressBar from "./ProgressBar";

const NutrientsGoals = ( props ) => {
  
    return (
        <div style = {{display: "flex", flexDirection: "row", justifyContent: "space-evenly", gap: ".5rem",flexWrap: "wrap"}}> 
        {Object.entries(props).map(([key, value]) => (
          <div key={key} style = {{ padding: "5px", boxShadow: "1px 1px 5px"}}>
            <ProgressBar value={100} max = {value} label={key}/>
          </div>
        ))}
        </div>
    );
};

export default NutrientsGoals;