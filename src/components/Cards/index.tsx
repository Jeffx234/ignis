import {
  CardComponent,
  CardTitle,
  CardText,
  CardImage,
  CardDescription,
  CardCircle,
} from './styled'

interface CardProps {
  title: string
  description: string
  image: string
  onClick: any
  index: number
  key: number
}

export function Cards({
  title,
  description,
  image,
  onClick,
  index,
  key,
}: CardProps) {
  return (
    <CardComponent>
      <CardImage>
        <img src={image} alt={title} />
      </CardImage>
      <CardDescription>
        <CardCircle>
          <p>100%</p>
        </CardCircle>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
        <button type="button" onClick={onClick}>
          Ver mais
        </button>
      </CardDescription>
    </CardComponent>
  )
}
