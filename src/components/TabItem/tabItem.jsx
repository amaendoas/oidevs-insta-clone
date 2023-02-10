import { Text } from "../../ui/Text"
import * as S from "./styles"

export const TabItem = ({text, icon: Icon, size, iconSize, activeTab, onClick}) => {
  return (
    <S.Container onClick={onClick} activeTab={activeTab}>
      {Icon && <Icon size={iconSize || 20} color={activeTab ? '#fff' : '#858585'} />}
      <Text size={size} color={activeTab ? '#fff' : '#858585'} >
        {text}
      </Text>
    </S.Container>
  )
}