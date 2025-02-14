'use client'

import { Post } from 'contentlayer/generated'
import { FunctionComponent, useEffect, useState } from 'react'
import PostTeaser from './PostTeaser'
import { amaticSC } from '@/app/styles/fonts'

interface PostsChunksProps {
  posts: Post[]
}

interface PostChunk {
  country: string
  part?: number
}

const PostsChunks: FunctionComponent<PostsChunksProps> = ({ posts }) => {
  const [postChunks, setPostChunks] = useState<PostChunk[]>([])

  useEffect(() => {
    const chunks: PostChunk[] = []
    for (const post of posts) {
      if (chunks.length === 0) {
        chunks.push(
          !post.part
            ? { country: post.country }
            : { country: post.country, part: post.part }
        )
      } else {
        const chunksWithSameCountry = chunks.filter(
          (chunk) => chunk.country === post.country
        )

        const isACountryWithoutPart = post.part === 0

        const hasAnewPart = chunksWithSameCountry.every(
          (chunkWithSameCountry) => chunkWithSameCountry.part !== post.part
        )

        if (
          (isACountryWithoutPart && chunksWithSameCountry.length === 0) ||
          (!isACountryWithoutPart && hasAnewPart)
        ) {
          chunks.push(
            !post.part
              ? { country: post.country }
              : { country: post.country, part: post.part }
          )
        }
      }
    }
    setPostChunks(chunks)
  }, [posts])

  return (
    <>
      {postChunks.map(({ country, part }) => (
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
