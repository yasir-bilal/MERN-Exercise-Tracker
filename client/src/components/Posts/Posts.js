import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return (
    <>
    
        
          <table className={classes.table}>
            <tr>
              <th style={{width: "12%", overflow: "hidden", textAlign: "center", content:"center"}}> Activity Type</th>
              <th style={{width: "12%", overflow: "hidden", textAlign: "center"}}> Date </th>
              <th style={{width: "12%", overflow: "hidden", textAlign: "center"}}> Sets</th>
              <th style={{width: "12%", overflow: "hidden", textAlign: "center"}}> Duration (min) </th>
              <th style={{width: "12%", overflow: "hidden", textAlign: "center"}}> Description </th>
              
              <th style={{width: "12%", overflow: "hidden", textAlign: "center"}}> Delete</th>
              <th style={{width: "12%", overflow: "hidden", textAlign: "center"}}> Edit  <i class="mdi mdi-pencil"></i> </th>

            </tr>

          </table>
          


      
      <>
        {posts.map((post) => (
          <ul key={post._id} item >
            <Post post={post} setCurrentId={setCurrentId} />
          </ul>
        ))}
      </>
      </>
  );
};

export default Posts;



{/* <th style={{width: "12%", overflow: "hidden", textAlign: "center"}}> Set Counter  </th> */}