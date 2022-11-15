import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function NavBar(props) {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    To Do List
                </Typography>
                <FormGroup>
                    <FormControlLabel 
                        control={
                            <Switch 
                                onChange={props.changeFunction}
                            />
                        } 
                        label={props.currentMode === 'light' ? 'Light Mode' : 'Dark Mode'}
                    />
                </FormGroup>

                </Toolbar>
            </AppBar>
        </Box>
  );
}