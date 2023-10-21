import { useState, useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import memories from '../src/assets/memories.png'
import useStyles from './styles'

import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

import { getPosts } from './actions/posts'

const App = () => {
  const [currentId, setCurrentId] = useState(null)
  const { appBar, heading, image, mainContainer } = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])

  return (
    <Container maxWidth='lg'>
      <AppBar className={appBar} position='static' color='inherit'>
        <Typography className={heading} variant='h2' align='center'>Memories</Typography>
        <img className={image} src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid className={mainContainer} container justifyContent='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App