import * as S from "./styles"
import { fetcher } from "../../services"
import { useContext, useEffect, useState } from "react"
import { PostItem } from "../PostItem"
import { Text } from "../../ui/Text"
import { InstaContext } from "../../context"

export const Posts = () => {
  const [imagesList, setImagesList] = useState([])
  const [showLoading, setShowLoading] = useState(false);

  const { dispatch, globalState } = useContext(InstaContext)

  const getImages = async() => {
    try {
      setShowLoading(true)
      const response = await fetcher('photos')
      setImagesList(response)
      dispatch({type: "add_photos", payload: response})
      setShowLoading(false)
    } catch(error) {
      setShowLoading(false)
      console.error(error)
    }
  }

  console.log(globalState)
  useEffect(() => {
      getImages()
  }, [])

  return (
    <S.Container>
      {showLoading && <Text>Carregando...</Text>}
      {!showLoading && imagesList.map((image, index) => {
        if(index < 3) {
          return <PostItem key={image.id} src={image.urls.small} fixed/>
        } else if(index >= 9) {
          return
        } else {
          return (
          <PostItem key={image.id} src={image.urls.small}/>
          )
        }
      })}
    </S.Container>
  )
}