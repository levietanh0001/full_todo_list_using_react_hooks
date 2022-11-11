const TodoItem = ({key, index, item, deleteTodoItem, completeTodoItem, updateTodoItem}) => {
    return (
    <>
        <div style={{textDecoration: item.complete ? "line-through" : ""}}>
            {index}. {item.todo}
        </div>
        <div>
            <button onClick={() => updateTodoItem(index)}>Update</button>
            <button onClick={() => completeTodoItem(index)}>Mark as Complete</button>
            <button onClick={() => deleteTodoItem(index)}>X</button>
        </div>
    </>
)}

export default TodoItem