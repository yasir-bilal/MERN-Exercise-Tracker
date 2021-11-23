import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Select, MenuItem, FormControl, InputLabel, Input } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';



import { createPost, updatePost } from '../../actions/posts';
import useStyles from './styles';
import moment from 'moment';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ activity: '', date: '', sets: '', duration: '', description: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  let [submitted, setSubmitted] = useState();
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);
  
  const clear = () => {
    setCurrentId(0);
    setPostData({ activity: '', date: '', sets: '', duration: '', description: '' });
   
  };
 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    setSubmitted(true);

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      
      clear();
      
    
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
      
      clear();
    
    }
    alert("Submitted Susscessfully")
  
    
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to create and track your own exercises and and stay fit!.
        </Typography>
      </Paper>
    );
  }
 

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" Validate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
      
        <Typography variant="h6" fullWidth multiline rows={1}>{currentId ? `Editing Exercise "${post.activity}"` : 'Creating an Exercise'}</Typography>
        
      
        
       
        
        
        
        <Select type="input" name="Activity" variant="outlined" label="Activity Type" fullWidth value={postData.activity} onChange={(e) => setPostData({ ...postData, activity: e.target.value })} required >
        <MenuItem value={"Cycling"}>Cycling</MenuItem>
    <MenuItem value={"Running"}>Running</MenuItem>
    <MenuItem value={"Swiming"}>Swiming</MenuItem>
    <MenuItem value={"Gym"}>Gym</MenuItem>
        </Select>
        
        
        <TextField type="date" name="date"   variant="outlined" label="" fullWidth   required 
        value= { moment( postData.date).format('YYYY-MM-DD') } onChange={(e) => setPostData({ ...postData, date: e.target.value })}
         />

        <TextField name="sets" type="number" variant="outlined" label="No. of Sets" fullWidth value={postData.sets}  onChange={(e) => setPostData({ ...postData, sets: e.target.value})} inputProps={{ min: 0, max: 5 }} min={1} max={5} />
        <TextField name="duration" type="number" variant="outlined" label="Duration in (min)" fullWidth value={postData.duration} onChange={(e) => setPostData({ ...postData, duration: e.target.value })} required inputProps={{ min: 0, max: 60 }} min={1} max={60} />
        <TextField name="description" type="text" variant="outlined" label="description" fullWidth multiline rows={1} value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })} inputProps={{ maxLength: 8 }} />

        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth  >Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        
        <div>{submitted && <div class='success-message'><h3>Submited</h3>
        
      </div>}</div>
       
      </form>
      
      
      
    </Paper>
    
  );
};

export default Form;
