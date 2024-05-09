import NextImage from 'next/image'
import { FunctionComponent } from 'react'

interface ThumbnailProps {
  src: string
  title: string
  className?: string
}

const Thumbnail: FunctionComponent<ThumbnailProps> = ({
  src,
  title,
  className,
}) => {
  return (
    <NextImage
      className={`rounded-full w-12 h-12 border-2 border-[#FF4E50] ${className ?? ''}`}
      src={src}
      alt={`thumbnail ${title}`}
      width="48"
      height="48"
    />
  )
}

export default Thumbnail
