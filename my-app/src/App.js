
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import top100Films from './top100Films';

export default function ButtonUsage() {
	return (<>
	<Button variant="contained">Hello world</Button>
	<br />
	
	<Stack spacing={2} direction="row">
	<Button variant="text">Text</Button>
	<Button variant="contained">Contained</Button>
	<Button variant="outlined">Outlined</Button>
	</Stack>
	<br />
	
	<Stack direction="row" spacing={2}>
	<Button>Primary</Button>
	<Button disabled>Disabled</Button>
	<Button href="#text-buttons">Link</Button>
	</Stack>
	<br />
	
	<Button variant="contained">Contained</Button>
	<Button variant="contained" disabled>
	Disabled
	</Button>
	<Button variant="contained" href="#contained-buttons">
	Link
	</Button>
	<br />
	
	<Button variant="contained" disableElevation>
	Disable elevation
	</Button>
	<br />
	
	<Button variant="outlined">Primary</Button>
	<Button variant="outlined" disabled>
	Disabled
	</Button>
	<Button variant="outlined" href="#outlined-buttons">
	Link
	</Button>
	<br />
	
	<Button
	onClick={() => {
		alert('clicked');
	}}
	>
	Click me
	</Button>
	<br />
	
	<Button color="secondary">Secondary</Button>
	<Button variant="contained" color="success">
	Success
	</Button>
	<Button variant="outlined" color="error">
	Error
	</Button>
	
	
	<div>
	<Button variant="outlined" size="small">
	Small
	</Button>
	<Button variant="outlined" size="medium">
	Medium
	</Button>
	<Button variant="outlined" size="large">
	Large
	</Button>
	</div>
	
	<Button variant="outlined" startIcon={<DeleteIcon />}>
	Delete
	</Button>
	<Button variant="contained" endIcon={<SendIcon />}>
	Send
	</Button>
	
	
	
	<Autocomplete
	disablePortal
	options={top100Films}
	sx={{ width: 300 }}
	renderInput={(params) => <TextField {...params} label="Movie" />}
	/>
	</>);
}

