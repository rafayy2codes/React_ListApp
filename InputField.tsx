import React, { useRef } from 'react'



interface Props {
    todo: string
    settodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void;
};

const InputField = ({ todo, settodo, handleAdd }: Props) => {
    const inputref = useRef<HTMLInputElement>(null);



    return (
        <form className="InputField" onSubmit={(e) => {
            handleAdd(e)
            inputref.current?.blur()
        }}>
            <input
                ref={inputref}
                value={todo}
                onChange={(e) => settodo(e.target.value)}
                type="text" placeholder='Enter your task' className='inputbox' />
            <button className='submit_task' type='submit'>Save</button>
        </form>
    )
}

export default InputField