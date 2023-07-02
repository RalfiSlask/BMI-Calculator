const LimitationComponent = (props) => {
    return ( 
        <div className="limitation--component">
            <div className="header--panel">
                <img src={props.src} alt="limiation"></img>
                <h2>{props.header}</h2>
            </div>
            <p>{props.text}</p>
        </div>
     );
}
 
export default LimitationComponent;