import './App.css'
import { NavBar } from './components/NavBar'
import { Grid, GridItem} from './ui/Grid'
import { Text } from './ui/Text'

function App() {

  return (
    <Grid>
      <GridItem>
        <NavBar/>
      </GridItem>
      <GridItem>
        <Text>Conteúdo</Text>
      </GridItem>
    </Grid>
  )
}

export default App
