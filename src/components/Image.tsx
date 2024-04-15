import NextImage from 'next/image'
import { FunctionComponent } from 'react'

interface ImageProps {
  src: string
  alt: string
}

const Image: FunctionComponent<ImageProps> = ({ src, alt }) => {
  return (
    <NextImage className="m-4" src={src} alt={alt} width="600" height="400" />
  )
}

export default Image
