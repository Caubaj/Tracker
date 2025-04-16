const ProgressBar = ({ value, max, label }) => {
    const percent = Math.min((value / max) * 100, 100);
  
    return (
      <div style={{  }}>
        <div style={{ paddingBottom: "0.2rem", fontSize: ".9rem"}}>
          {label}: {value} / {max}
        </div>
        <div style={{
          width: "100%",
          height: "5px",
          backgroundColor: "#eee",
          borderRadius: "10px",
          overflow: "hidden"
        }}>
          <div style={{
            width: `${percent}%`,
            height: "100%",
            backgroundColor: "#4caf50", // green
            transition: "width 0.3s ease"
          }} />
        </div>
      </div>
    );
  };

  export default ProgressBar;
  