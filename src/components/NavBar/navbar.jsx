import * as S from "./styles"
import logo from "../../assets/Instagram-white-logo.png"
import { NavItem } from "../NavItem"
import {MdHome, MdSearch, MdOutlineExplore, MdFavoriteBorder, MdOutlineAddBox, MdPersonOutline} from "react-icons/md"
import { ImFilm } from "react-icons/im"
import { TbSend } from "react-icons/tb"

const items = [
  {
    text: "Página Inicial",
    icon: MdHome
  },
  {
    text: "Pesquisa",
    icon: MdSearch
  },
  {
    text: "Explorar",
    icon: MdOutlineExplore
  },
  {
    text: "Reels",
    icon: ImFilm
  },
  {
    text: "Mensagens",
    icon: TbSend
  },
  {
    text: "Notificações",
    icon: MdFavoriteBorder
  },
  {
    text: "Criar",
    icon: MdOutlineAddBox
  },
  {
    text: "Perfil",
    icon: MdPersonOutline
  }
];


export const NavBar = () => {
  return (
    <S.Container>
      <img src={logo} alt="" />
      {
        items.map((item) => (
          <NavItem text={item.text} icon={item.icon} size='small' key={item.text}/>
        ))
      }

      <NavItem text='teste' size={32} color='red'/>
    </S.Container>
  )
}