import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function List(props) {

    const [toDoList, setToDoList] = React.useState([]);
    const [toDoForm, setToDoForm] = React.useState({
        form: ""
    });

    const handleChange = (event) => {
        const {name, value} = event.target

        setToDoForm(prevToDoFormData => {
            return {
                ...prevToDoFormData,
                [name]: value
            }
        })
    }

    const handleAdd = (event) => {
        event.preventDefault();
        setToDoList(prevToDoList => {

            return (
                [...prevToDoList, 
                {
                    id: prevToDoList.length+1,
                    task: toDoForm.form,
                    isCompleted:false
                }
                ]
            )
        })
    }

    const toDoListElements =  toDoList.map(toDo => <p key={toDo.id}>{toDo.task}</p>);

    return (
        <>
            <TextField 
                fullWidth={true}
                name='form'
                value={toDoForm.form}
                onChange={handleChange}
            />
            <button onClick={handleAdd}>Add</button>
            {toDoListElements.length === 0? '' : toDoListElements}
        </>
    )
}