import List1 from './List1.js';
function List(){
    //list of elements
    let l1 = [1,2,3,4,'a'];
    return(
        <div>
            {/* it will print 1234a */}
            <h1>{l1}</h1>
            <List1 key={l1} l1={l1}/>
            
        </div>
    );
}

export default List;