import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ post, setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <>
   
        
          <table className={classes.table}>
            <tr>
              <td style={{width: "12%", overflow: "hidden", textAlign: "center", content:"center"}}> Activity Type</td>
              <td style={{width: "12%", overflow: "hidden", textAlign: "center"}}> Date </td>
              <td style={{width: "12%", overflow: "hidden", textAlign: "center"}}> Sets</td>
              <td style={{width: "12%", overflow: "hidden", textAlign: "center"}}> Duration (min) </td>
              <td style={{width: "12%", overflow: "hidden", textAlign: "center"}}> Description </td>
              <td style={{width: "12%", overflow: "hidden", textAlign: "center"}}> Delete</td>
              <td style={{width: "12%", overflow: "hidden", textAlign: "center"}}> Edit  <i class="mdi mdi-pencil"></i> </td>

            </tr>

          </table>
          
<>

      
      <>
     
        {posts.map((post) => (
          <ul key={post._id} item >
             {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
            <Post post={post} setCurrentId={setCurrentId} />
            )}
          </ul>
        ))}
     
        </>
     </>
      </>
  );
};

export default Posts;



{/* <td style={{width: "12%", overflow: "hidden", textAlign: "center"}}> Set Counter  </td> */}