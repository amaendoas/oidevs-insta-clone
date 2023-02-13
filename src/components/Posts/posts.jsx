import * as S from "./styles"
import { fetcher } from "../../services"
import { useEffect, useState } from "react"
import { FeedItem } from "../FeedItem"

export const Posts = () => {
  const [imagesList, setImagesList] = useState([])
  const getImages = async() => {
    try {
      const response = await fetcher('photos')
      setImagesList(response)
      console.log(response)
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
          return <FeedItem src={image.urls.small} fixed/>
        }

        if(index)
        return (
        <FeedItem src={image.urls.small}/>
      )})}
    </S.Container>
  )
}