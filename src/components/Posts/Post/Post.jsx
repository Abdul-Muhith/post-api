import { useDispatch } from 'react-redux'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

import moment from 'moment'
import useStyles from './styles'
import { deletePost, likePost } from '../../../actions/posts'

const Post = ({ post, setCurrentId }) => {
  const { media, border, fullHeightCard, card, overlay, overlay2, grid, details, title, cardActions, mainContainer, smMargin, actionDiv } = useStyles()
  
  const dispatch = useDispatch()

return (
    <Card className={card}>
      <CardMedia className={media} image={post.selectedFile} title={post.title} />
      <div className={overlay}>
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
      </div>
        <div className={overlay2}>
        <Button
          style={{ color: 'white' }}
          size='small'
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize='default' />
        </Button>
      </div>
      <div className={details}>
        <Typography variant='body2' color='textSecondary'>{ post.tags.map((tag) => `#${tag}` )}</Typography>
      </div>
      <Typography className={title} variant='h5' gutterBottom>{post.title}</Typography>
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>{post.message}</Typography>
      </CardContent>
      <CardActions className={cardActions}>
        <Button size='small' color='primary' onClick={() => dispatch(likePost(post._id))}>
          <ThumbUpAltIcon fontSize='small' />
          &nbsp; Like &nbsp;
          {post.likeCount}
        </Button>
        <Button size='small' color='primary' onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize='small' />
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post