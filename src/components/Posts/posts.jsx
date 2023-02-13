import * as S from "./styles"
import { fetcher } from "../../services"
import { useEffect, useState } from "react"
import { PostItem } from "../PostItem"

export const Posts = () => {
  const [imagesList, setImagesList] = useState([])
  const getImages = async() => {
    try {
      const response = await fetcher('photos')
      setImagesList(response)
    } catch(error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getImages()
  }, [])
  return (
    <S.Container>
      {imagesList.map((image, index) => {
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