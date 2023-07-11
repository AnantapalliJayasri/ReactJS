function Props(props){
    return(
        <div>
            <p>{props.name} {props.color}</p>
            {props.children}
        </div>
    );
}

export default Props;