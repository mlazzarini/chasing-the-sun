import MainWrapper from '@/components/MainWrapper'
import { FunctionComponent } from 'react'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import PostTeaser from '@/components/PostTeaser'

const AllPosts: FunctionComponent = () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )
  return (
    <MainWrapper title="All posts">
      {posts.map((post, idx) => (
        <PostTeaser key={idx} {...post} />
      ))}
    </MainWrapper>
  )
}

export default AllPosts
