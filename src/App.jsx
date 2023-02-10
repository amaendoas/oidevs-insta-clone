import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { Posts } from './components/Posts'
import { Stories } from './components/Stories'
import { TabMenu } from './components/TabMenu'
import { Grid, GridItem} from './ui/Grid'

function App() {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <Grid>
      <GridItem>
        <NavBar/>
      </GridItem>
      <GridItem style={{margin: '0 auto', padding: '3rem 0'}}>
        <Header/>
        <Stories/>
        <TabMenu activeTab={activeTab} onChangeTab={setActiveTab}/>
        {activeTab === 'posts' && <Posts/>}
      </GridItem>
    </Grid>
  )
}

export default App
