const ProgressBar = (props) => {
    const { completed } = props;
  
    const containerStyles = {
      height: 30,
      width: '100%',
      backgroundColor: "white",
      border : "1px solid #635373",
      borderRadius: 50,
      lineHeight: '180%',
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: "#635373",
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      paddingRight: 10,
      color: 'white',
      fontFamily: 'din-2014',
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