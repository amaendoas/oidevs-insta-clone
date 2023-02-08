import './App.css'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { Stories } from './components/Stories'
import { UserFeed } from './components/UserFeed'
import { Grid, GridItem} from './ui/Grid'

function App() {

  return (
    <Grid>
      <GridItem>
        <NavBar/>
      </GridItem>
      <GridItem style={{margin: '0 auto', padding: '3rem 0'}}>
        <Header/>
        <Stories/>
        <UserFeed/>
      </GridItem>
    </Grid>
  )
}

export default App
