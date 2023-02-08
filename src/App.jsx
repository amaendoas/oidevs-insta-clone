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
      <GridItem>
        <Header/>
        <Stories/>
        <UserFeed/>
      </GridItem>
    </Grid>
  )
}

export default App
