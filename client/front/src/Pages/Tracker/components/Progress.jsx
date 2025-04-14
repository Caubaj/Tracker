import CircularProgressBar from "./CircularProgressBar";

const Progress = ({className, calorieGoal, proteinGoal}) => {
    return (
        <div className = {className} 
        style = {{ 
            display: "flex", 
            width : "100%",
            maxWidth: "100%",
            overflow: "hidden",
            boxSizing: "border-box",
            
            }}
        >
            <div  style = {{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "50%"}}>
                <h2 style = {{fontSize: "2rem",margin: 0,  fontFamily: "var(--font-heading)", fontWeight: "var(--font-weight-bold)"}}>Calories</h2>
                <CircularProgressBar  value={1000} goal={calorieGoal}/>
            </div>
            <div style = {{width: "50%", alignItems: "center", display: "flex", flexDirection: "column", justifyContent: "center"}} >
                <h1 style = {{ fontWeight: "var(--font-weight-light)"}}> 1000  </h1>
                <h1 style = {{ fontWeight: "var(--font-weight-light)"}}>{calorieGoal}</h1>
            </div>
        </div>
    );
};

export default Progress;