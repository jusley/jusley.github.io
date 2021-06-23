const ProgressBar = (props) => {
    const { completed } = props;
  
    const containerStyles = {
      height: 20,
      width: '100%',
      backgroundColor: "white",
      border : "3px solid #2F1A45",
      borderRadius: 50
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: "#635373",
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;