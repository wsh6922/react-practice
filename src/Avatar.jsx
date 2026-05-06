export function VanilaAvatar() {
    return (
        <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
        />
    );
}

export default function Avatar1() {
    const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
    const description = "Gregorio Y. Zara";

    return (
        <img className="avatar" src={avatar} alt={description}/>
    );
}

export function Avatar2() {
    const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
    const description  = "Gregorio Y. Zara";

    return (
        <>
        <img className="avatar" src={avatar} alt={description}/>
        <p>{description}</p>
        </>
    )
}

export function Avatar3({ imgUrl, description }) {
    return (
        <>
            <img className="avatar" src={imgUrl} alt={description}></img>
            <p>{description}</p>
        </>
    )
}

export function Avatar4(props) {
    console.log(props);

    return (
        <>
        <img className="avatar" src={props.imgUrl} alt={props.description}></img>
        <p style={props.inlineStyle}>{props.description}</p>
        </>
    )
}

export function Avatar5({imgUrl, description, inlineStyle}) {
    return (
        <>
        <img className="avatar" src={imgUrl} alt={description}></img>
        <p style={inlineStyle}>{description}</p>
        </>
    )
} 
