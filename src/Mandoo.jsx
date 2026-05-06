function Mandoo({borderColor, width}) {

    const MandooImg = "https://i.imgur.com/7vQD0fPs.jpg";

    return (
        <div style={{border: `5px solid ${borderColor}`, marginBottom: "20px", display: "flex"}}>
            <span>img size: {width}px</span>
            <img style={{width: `${width}px`, alignItems: "center"}} src={MandooImg}></img>
        </div>
    )    
}


export default Mandoo;
