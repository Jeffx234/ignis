import { useState } from 'react'
import ScrollReveal from '../Scrool'
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
  style?: any
}

export function Cards({
  title,
  description,
  image,
  onClick,
  index,
  key,
  style,
}: CardProps) {

  
  return (
    <ScrollReveal >
      <CardComponent>
        <CardImage>
          <img src={image} alt={title} />
        </CardImage>
        <CardDescription>
          <CardCircle>
            <p>80%</p>
          </CardCircle>
          <CardTitle>{title}</CardTitle>
          <CardText >{description}</CardText>
          <button type="button" onClick={onClick}>
            Ver mais
          </button>
        </CardDescription>
      </CardComponent>
    </ScrollReveal>
  )
}
