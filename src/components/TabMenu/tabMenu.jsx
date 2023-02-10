import { TabItem } from "../TabItem"
import * as S from "./styles"
import { MdAutoAwesomeMosaic, MdOutlinePersonPin } from "react-icons/md"
import { ImFilm } from "react-icons/im"

export const TabMenu = ({activeTab, onChangeTab}) => {
  return (
    <S.Container>
      <TabItem
      size={12}
      iconSize={14}
      text='Publicações'
      icon={MdAutoAwesomeMosaic}
      activeTab={activeTab === 'posts'}
      onClick={() => onChangeTab('posts')}
      />

      <TabItem
      size={12}
      iconSize={14}
      text='Reels'
      icon={ImFilm}
      activeTab={activeTab === 'reels'}
      onClick={() => onChangeTab('reels')}
      />

      <TabItem
      size={12}
      iconSize={14}
      text='Marcados'
      icon={MdOutlinePersonPin}
      activeTab={activeTab === 'marked'}
      onClick={() => onChangeTab('marked')}
      />
    </S.Container>
  )
}