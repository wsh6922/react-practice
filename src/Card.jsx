function Card({ children }) {
    return (
        <div style={{border: "5px solid black", margin: "10px", padding: "20px"}}>
            {children}
        </div>
    )
}

export default Card;