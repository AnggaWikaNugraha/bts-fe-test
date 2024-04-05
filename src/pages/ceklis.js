import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createCeklisAction, deleteCeklisAction, getCeklisAction, loginAction } from '../api/login';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Delete';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Ceklis() {

  const history = useHistory();
  const dispatch = useDispatch();
  const ceklisStateReducer = useSelector((state) => state.ceklisStateReducer)

  React.useEffect(() => {
    dispatch(getCeklisAction());
  },[dispatch])

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(createCeklisAction({
      name: data.get('name'),
    },history))
  };

  return (
      <Container component="main" maxWidth="md">
        <Button sx={{
          marginTop: '100px'
        }} onClick={() => {
          dispatch({
            type: 'STATUS_PAGE_REDUCER_RESET',
          })
        }}>Logout</Button>
        <CssBaseline />
        <List sx={{ width: '100%', maxWidth: 360, marginTop: '100px', bgcolor: 'background.paper' }}>
          {ceklisStateReducer?.data?.map((value) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
              <ListItem
                key={value}
                secondaryAction={
                  <IconButton onClick={() => dispatch(deleteCeklisAction(value.id))} edge="end" aria-label="comments">
                    <CommentIcon />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton role={undefined} 
                  onClick={() => {
                    console.log(value)
                  }} 
                  dense>
                  <ListItemIcon>
                    {/* <Checkbox
                      edge="start"
                      checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                    /> */}
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={`${value.name}`} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Typography component="h1" variant="h5">
            Create ceklis
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="name"
                  autoFocus
                />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
  );
}