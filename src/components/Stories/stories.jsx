import { StoriesItem } from "../StoriesItem"
import * as S from "./styles"

export const Stories = () => {
  const items = [
    {
      image: 'https://via.placeholder.com/90',
      text: 'Desafios'
    },
    {
      image: 'https://via.placeholder.com/90',
      text: 'Comunidade'
    },
    {
      image: 'https://via.placeholder.com/90',
      text: 'Faculdades'
    },
    {
      image: 'https://via.placeholder.com/90',
      text: 'Modelo Educacional'
    }
  ]
  return (
    <S.Container>
      {
        items.map((item) => (
          <StoriesItem src={item.image} key={item.text} text={item.text}/>
        ))
      }
    </S.Container>
  )
}