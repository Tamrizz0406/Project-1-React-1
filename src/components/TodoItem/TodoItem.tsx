


function TodoItem({id,text,onDelete}:any) {
    return (
        <li>
            <span>{text}</span>
            <button onClick={()=> onDelete(id)}>Delete</button>
        </li>
    )
}


export default TodoItem