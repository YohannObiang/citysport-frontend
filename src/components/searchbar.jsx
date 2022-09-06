import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';

export default function Searchbar() {
  return (
    <div className='searchbox'>
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '77vw' },
        }}
        noValidate
        autoComplete="off"
        >
        <TextField id="outlined-basic" label="Que recherchez-vous?" variant="outlined" />
        </Box>
        <Stack direction="row" spacing={1}>
          <Button variant="contained" endIcon={<SearchIcon />}>
            Rechercher
          </Button>
        </Stack>
    </div>
  );
}
