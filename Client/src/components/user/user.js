import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserListData } from '../../actions/posts';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    flexClass:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'

    },
    headingPadding:{
      textAlign:'center',
      paddingTop:"10px",
      paddingBottom:"10px",
    }
  }));

export default function User(){
    const userList = useSelector((state) => state.userList);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getUserListData());
    }, [ dispatch]);
    console.log('user list',userList);

    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
              <Grid item xs={12} className={classes.headingPadding}>
              <Typography variant="h4" color="primary">Registered Users List</Typography>
              </Grid>
              {userList && userList[0]?.map(x=>{ 
                  return(
            <Paper   className={classes.paper} >
            <Grid container spacing={2} className={classes.flexClass}>
          <Grid item >
          <Typography variant="subtitle1">
              {console.log(userList[0])}
              {x.firstName.toUpperCase() + " " + x.lastName.toUpperCase()}
              </Typography>

          </Grid>
          <Grid item >
            
              <Typography variant="subtitle1">Score</Typography>
          </Grid>
        </Grid>

            </Paper>
            ) })}  


         
          </Grid>
        </Grid>
      </div>
      );
}

