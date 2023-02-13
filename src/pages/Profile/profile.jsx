import { useState } from "react";
import { Header } from "../../components/Header";
import { Mentions } from "../../components/Mentions";
import { NavBar } from "../../components/NavBar";
import { Posts } from "../../components/Posts";
import { Reels } from "../../components/Reels";
import { Stories } from "../../components/Stories";
import { TabMenu } from "../../components/TabMenu";
import { Grid, GridItem } from "../../ui/Grid";
import * as S from "./styles"


export const Profile = ({onLogOut}) => {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <Grid>
      <GridItem>
        <NavBar onLogOut={onLogOut}/>
      </GridItem>
      <GridItem>
        <S.ContentWrapper>
          <Header/>
          <Stories/>
          <TabMenu activeTab={activeTab} onChangeTab={setActiveTab}/>
          {activeTab === 'posts' && <Posts/>}
          {activeTab === 'reels' && <Reels/>}
          {activeTab === 'mentions' && <Mentions/>}
        </S.ContentWrapper>
      </GridItem>
    </Grid>
  )
}
