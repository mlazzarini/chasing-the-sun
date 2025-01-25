'use client'

import { Post } from 'contentlayer/generated'
import { FunctionComponent, useEffect, useState } from 'react'
import PostTeaser from './PostTeaser'
import { amaticSC } from '@/app/styles/fonts'

interface PostsChunksProps {
  posts: Post[]
}

interface PostCountry {
  country: string
  part?: number
}

const PostsChunks: FunctionComponent<PostsChunksProps> = ({ posts }) => {
  const [postCountries, setPostCountries] = useState<PostCountry[]>([])

  useEffect(() => {
    const uniqueCountries: PostCountry[] = []
    for (const item of posts) {
      const lastCountryInserted =
        uniqueCountries.length > 1 ? uniqueCountries.at(-1)?.country : ''
      if (item.country !== lastCountryInserted) {
        uniqueCountries.push(
          !item.part
            ? { country: item.country }
            : { country: item.country, part: item.part }
        )
      }
    }
    setPostCountries(uniqueCountries)
  }, [posts])

  return (
    <>
      {postCountries.map(({ country, part }) => (
        <div
          className="w-full flex flex-col items-center"
          key={`${country}-${part}`}>
          <div
            className={`${amaticSC.className} font-bold text-3xl pr-1 pl-1 text-[#FF4E50] border-b-2 border-[#FF4E50] self-start w-full mb-6 pb-2`}>
            {`${country} ${!!part ? `- Part ${part}` : ''}`}
          </div>
          {posts
            .filter(
              (post) =>
                post.country === country && (post.part === part || !post.part)
            )
            .map((post, idx) => (
              <PostTeaser key={idx} {...post} />
            ))}
        </div>
      ))}
    </>
  )
}

export default PostsChunks
