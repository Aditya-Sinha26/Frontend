import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CommentIcon from '@material-ui/icons/Comment';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import axios from '../../axios';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
    marginBottom: '20px',
  },
  media: {
    height: 0,
    paddingTop: '100%', // 1:1
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
    const history = useHistory();
  const classes = useStyles();
  const [like, setLike] = React.useState(props.likes.includes(localStorage.getItem('username')));

  const likePost = () => {
      if(like){
        axios.post('/post/unlike',{hostId: localStorage.getItem('username') ,postId: props.postId})
            .then(() => {
                setLike(false)
            })
      }else{
          axios.post('/post/like', {hostId: localStorage.getItem('username'), postId: props.postId})
            .then(() => {
                setLike(true)
            })
      }
  };


  const parseDate = (data) =>{
    const date = new Date(data);
    const index = date.getMonth();
    var month = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    var str = month[index] +' '+ date.getDate() +', '+ date.getFullYear();
    return str;
  }

  return (
    <Card className={classes.root + ' mx-auto shadow'}>
      <CardHeader
        role="button"
        onClick={() => history.push(`/profile/${localStorage.getItem('username')}`)}
        avatar={
          <Avatar aria-label="recipe" src={props.profile_img} className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.author}
        subheader={parseDate(props.date)}
      />
      <CardMedia
        className={classes.media}
        image={props.img_src}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          { props.caption }
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon color={like?"secondary":"default"} onClick={likePost}/>
        </IconButton>
        <IconButton aria-label="share">
          <CommentIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
            className="ml-auto"
          //onClick={handleExpandClick}
          //aria-expanded={expanded}
          aria-label="show more"
        >
          <BookmarkIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
