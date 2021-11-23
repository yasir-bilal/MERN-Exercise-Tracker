import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

import { useDispatch } from 'react-redux';
import moment from 'moment';
import dateformat from "dateformat"

import { setCount, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));



  return (

    <>
       
          <table>
            <tbody>
          {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
            <tr className={classes.table}>
          

              <td  style={{width: "12%", overflow: "hidden", textAlign: "center", content:"center"}}>
              {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
       <h4>{post.activity}</h4> 
      )}
              </td>
              <td style={{width: "12%", overflow: "hidden", textAlign: "center", content:"center"}}>
              {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
       <h4>{dateformat(post.date, "dd-mm-yyyy")}</h4> 
      )}
              </td>
              <td style={{width: "12%", overflow: "hidden", textAlign: "center", content:"center"}}>
              {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
       <h4>{post.sets}</h4> 
      )}
              </td >
              <td style={{width: "12%", overflow: "hidden", textAlign: "center", content:"center"}}>
              {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
       <h4>{post.duration}</h4> 
      )}
              </td>
              <td style={{width: "12%", overflow: "hidden", textAlign: "center", content:"center"}}>
              {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
       <h4>{post.description}</h4> 
      )}
              </td>

    


       <td  style={{width: "12%", overflow: "hidden", textAlign: "center", content:"center"}}>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" /> Delete
        </Button> 
        )} </td>  

<td style={{width: "12%", overflow: "hidden", textAlign: "center", content:"center"}}>
      {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
      
        <Button onClick={() => setCurrentId(post._id)} style={{ color: 'green' }} size="small">
          <CreateIcon fontSize="default" /> Edit
        </Button>
     
      )} </td>
      
   
    

    </tr> )}
    </tbody>
</table>


</>
  );
};

export default Post;

