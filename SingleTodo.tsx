import React from 'react'
import { Todo } from './model'
import './App.css';
import { IoIosAddCircle } from "react-icons/io";
import { IoMdDoneAll } from "react-icons/io";
import { MdCancel } from "react-icons/md";


type Props = {
    todo: Todo,
    todos: Todo[],
    settodos: React.Dispatch<React.SetStateAction<string>>

};



const SingleTodo = ({ todo, todos, settodos }: Props) => {
    return (
        <form className='todos_single'>
            <span className='todos_single--text'></span>
            {todo.todo}

            <div> <span className="icon"> </span>
                <IoIosAddCircle />
                <span className="icon"> </span>
                <IoMdDoneAll />
                <span className="icon"> </span>
                <MdCancel />
            </div>

        </form>
    )
}

export default SingleTodo