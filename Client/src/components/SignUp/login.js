import React, { useContext,useState } from "react";
import { AccountContext } from "../accountContext";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SignUp from './signUp'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../../actions/posts';
import {fetchUser }  from '../../api/index'

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    useHistory
} from 'react-router-dom'
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({setLoginUser}) {
  const history = useHistory()
  const classes = useStyles();
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.user);
console.log('lists',lists)
setLoginUser(lists[0] )
history.push("/")
  const [user,setUser]=useState({
    email:"",
    password:"",
  })
const onHandleChange=(e)=>{
    const {name,value} = e.target
console.log('e',name,value)
setUser({
    ...user,
    [name]:value,
})
}
const loginUser= (e)=>{
    const {email,password}= user
    if(email && password){
        dispatch( fetchUserData(user))
    }
    e.preventDefault();
}

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {console.log('user',user)}
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={onHandleChange}

          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={onHandleChange}

          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e)=>loginUser(e)}
          >
            Sign In
          </Button>
          <Grid container>
            {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
            <Grid item>
              <div  onClick={() => history.push("/register")} variant="body2">
                {"Don't have an account? Sign Up"}
              </div>
            </Grid>
          </Grid>
        </form>
      </div>
     
    </Container>
   
  );
}