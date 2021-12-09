import React,{useEffect} from 'react'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from './Card';
import { createPostAction, getPostAction } from '../../Action/PostActions';
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux';

const useStyles = makeStyles((theme) => ({
    bold: {
      fontWeight: 500,
    },
    root: {
        flexGrow: 1,
      },
      control: {
        padding: theme.spacing(2),
      },
      gridContainer:{
        paddingLeft:"20px",
        paddingRig:"20px",

    }
  }));

 const Post = ({posts, createPost,createPostAction, getPostAction}) => {
    const classes = useStyles();

    const postsList = [];
    
    posts.forEach((post) => {
        postsList.push(<div key={post.id}>{post.title}</div>)
    })
    
    const handleCreatePost = () => {
        // createPost();
        createPostAction();
    }
    useEffect(() => {
        getPostAction();
    }, [])
    return (
        <div>
            <h2 className={classes.bold}>Posts</h2>
            <div>{postsList}</div>
            <div>
                <Button variant="contained" color="primary" onClick={handleCreatePost}>
                    CreatePost
                </Button>
                <Grid className={classes.gridContainer} container justify="center" spacing={6}>
                    {posts.map((post) => (
                    <Grid key={post.id} item xs={12} sm={6} md={3}>
                        <Card post={post}/>
                    </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        posts:state.posts
    }
}
const mapDispatchToProps = (dispatch) =>{
    // return{
    //     createPost: ()=>dispatch(createPostAction()),
    // }
    return bindActionCreators({createPostAction,getPostAction}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);