function List1(props){
    const numbers = props.l1;
    const numbers1 = numbers.map(x => (x*3));
    return(
        <div>
            <h1>{numbers1}</h1>
            <h2>{numbers1[2]}</h2>
        </div>
        
    );
}

export default List1;