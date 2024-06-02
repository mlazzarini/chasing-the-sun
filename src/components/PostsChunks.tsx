'use client'

import { Post } from 'contentlayer/generated'
import { FunctionComponent, useEffect, useState } from 'react'
import PostTeaser from './PostTeaser'
import { amaticSC } from '@/app/styles/fonts'

interface PostsChunksProps {
  posts: Post[]
}

const PostsChunks: FunctionComponent<PostsChunksProps> = ({ posts }) => {
  const [countries, setCountries] = useState<string[]>([])

  useEffect(() => {
    const uniqueCountries: string[] = []
    for (const item of posts) {
      if (!uniqueCountries.includes(item.country)) {
        uniqueCountries.push(item.country)
      }
    }
    setCountries(uniqueCountries)
  }, [posts])

  return (
    <>
      {countries.map((country) => (
        <div className="w-full flex flex-col items-center" key={country}>
          <div
            className={`${amaticSC.className} font-bold text-3xl pr-1 pl-1 text-[#FF4E50] border-b-2 border-[#FF4E50] self-start w-full mb-6 pb-2`}>
            {country}
          </div>
          {posts
            .filter((post) => post.country === country)
            .map((post, idx) => (
              <PostTeaser key={idx} {...post} />
            ))}
        </div>
      ))}
    </>
  )
}

export default PostsChunks
