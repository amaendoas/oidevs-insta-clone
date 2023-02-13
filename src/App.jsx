import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { Posts } from './components/Posts'
import { Stories } from './components/Stories'
import { TabMenu } from './components/TabMenu'
import { Grid, GridItem} from './ui/Grid'
import styled from 'styled-components'
import { Reels } from './components/Reels'
import { Mentions } from './components/Mentions'

const ContentWrapper = styled.div`
  height: 100%;
  max-width: 935px;
  padding-top: 3rem;
  margin: 0 auto;
`;
function App() {
    const [activeTab, setActiveTab] = useState("posts");

  return (
    <Grid>
      <GridItem>
        <NavBar/>
      </GridItem>
      <GridItem>
        <ContentWrapper>
          <Header/>
          <Stories/>
          <TabMenu activeTab={activeTab} onChangeTab={setActiveTab}/>
          {activeTab === 'posts' && <Posts/>}
          {activeTab === 'reels' && <Reels/>}
          {activeTab === 'mentions' && <Mentions/>}
        </ContentWrapper>
      </GridItem>
    </Grid>
  )
}

export default App
