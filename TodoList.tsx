import React from 'react'
import './styled.css';
import { Todo } from './model';



interface Props {
    todos: Todo[];
    settodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, settodos }: Props) => {
    return (
        <div className='todos'>
            {todos.map(todo => (
                <li>{todo.todo}</li>
            ))}
        </div>
    )
}





export default TodoList;