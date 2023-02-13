import * as S from "./styles"
import logo from "../../assets/Instagram-white-logo.png"
import { NavItem } from "../NavItem"
import {MdHome, MdSearch, MdOutlineExplore, MdFavoriteBorder, MdOutlineAddBox, MdPersonOutline, MdOutlineMenu} from "react-icons/md"
import { ImFilm } from "react-icons/im"
import { TbSend } from "react-icons/tb"
import {FiLogOut} from "react-icons/fi"

export const NavBar = ({onLogOut}) => {
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

  return (
    <S.Container>
      <S.Content>
      <img src={logo} alt="" />
      {
        items.map((item) => (
          <NavItem text={item.text} icon={item.icon} key={item.text}/>
        ))
      }
      </S.Content>
    <S.Footer>
      <NavItem text="Sair" icon={FiLogOut} onClick={onLogOut} />
      <NavItem text="Mais" icon={MdOutlineMenu}/>
    </S.Footer>
    </S.Container>
  )
}