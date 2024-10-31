import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";


export default function TodoForm(
) {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
        <li className="list-group-item d-flex align-items-center ">
            <input
                value={todo.title}
                onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
                placeholder="Enter new todo"
                className="form-control"
                style={{
                    flex: 1,
                }}
            />
            <div>
                <button
                    onClick={() => dispatch(updateTodo(todo))}
                    className="btn btn-warning ms-2"
                    id="wd-update-todo-click"
                >
                    Update
                </button>
                <button
                    onClick={() => dispatch(addTodo(todo))}
                    className="btn btn-success ms-2"
                    id="wd-add-todo-click"
                >
                    Add
                </button>

            </div>
        </li>
    );
}
