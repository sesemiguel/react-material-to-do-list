import TextField from '@mui/material/TextField';
import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import { Checkbox } from '@mui/material';

export default function List(props) {

    // Hooks
    const [toDoList, setToDoList] = React.useState([]);
    const [toDoForm, setToDoForm] = React.useState({
        form: ""
    });

    // Changes on the text field
    const handleTextFieldChange = (event) => {
        const {name, value} = event.target

        setToDoForm(prevToDoFormData => {
            return {
                ...prevToDoFormData,
                [name]: value
            }
        })
    }

    // Changes on the to do field
    // const handleToDoChange = (event) => {
    //     const {name, value} = event.target

        
    //     setToDoList(prevtoDoList => {
    //         return {
    //             ...prevtoDoList,
    //             [name]: value
    //         }
    //     })
    // }

    // Add Todo
    const handleAddToDo = (event) => {
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

    const toDoListElements =  toDoList.map(
        toDo => {
            return(
                <>
                    <Grid 
                        container 
                        rowSpacing={1} 
                        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1}}
                        spacing={0}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Grid item xs={0.5} sm={0.5} md={0.5} lg={0.5}>
                            <Checkbox />
                        </Grid>
                        <Grid item xs={8.5} sm={9} md={9} lg={10.5}>
                            <TextField 
                                key={toDoList.length}
                                fullWidth={true}
                                name='task'
                                value={toDo.task}
                                size='small'
                                // onChange={handleToDoChange}
                            />
                        </Grid>
                        <Grid item xs={3} sm={2.5} md={2.5} lg={1}>
                            <Button 
                                variant="contained"
                                onClick={handleAddToDo}
                                color='secondary'
                                edge='start'
                                size='medium'
                                startIcon={<AddIcon />}
                            >
                                Delete
                            </Button>
                        </Grid>
                    </Grid>
                </>
                
            )
            
        });

    return (
        <>
            <br/>
            <Grid 
                container 
                rowSpacing={1} 
                columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1}}
                spacing={0}
                alignItems="center"
                justifyContent="center"
            >
                <Grid item xs={0.5} sm={0.5} md={0.5} lg={0.5}>

                </Grid>
                <Grid item xs={8.5} sm={9} md={9} lg={10.5}>
                    <TextField 
                        fullWidth={true}
                        name='form'
                        value={toDoForm.form}
                        onChange={handleTextFieldChange}
                        size='small'
                    />
                </Grid>
                <Grid item xs={3} sm={2.5} md={2.5} lg={1}>
                    <Button 
                        variant="contained"
                        onClick={handleAddToDo}
                        color='secondary'
                        edge='start'
                        size='medium'
                        startIcon={<AddIcon />}
                    >
                        Add
                    </Button>
                </Grid>
            </Grid>
            <br />
            {toDoListElements.length === 0? '' : toDoListElements}
        </>
    )
}