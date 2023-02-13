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
      onClick={() => onChangeTab('posts')}
      activeTab={activeTab === 'posts'}
      />

      <TabItem
      size={12}
      iconSize={14}
      text='Reels'
      icon={ImFilm}
      onClick={() => onChangeTab('reels')}
      activeTab={activeTab === 'reels'}
      />

      <TabItem
      size={12}
      iconSize={14}
      text='Marcados'
      icon={MdOutlinePersonPin}
      onClick={() => onChangeTab('mentions')}
      activeTab={activeTab === 'mentions'}
      />
    </S.Container>
  )
}