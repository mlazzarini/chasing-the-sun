import WorldMap from '@/components/WorldMap'
import PostTeaser from '@/components/PostTeaser'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { amaticSC } from '../app/styles/fonts'
import Countdown from '@/components/Countdown'

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="self-stretch bg-gradient-to-r from-[#FF4E50]/[.7] to-[#F9D423]/[.7]">
        <WorldMap />
      </div>
      <div className="lg:w-1/2 md:w-4/5 sm:w-4/5 mx-auto p-8">
        {/* <h1
          className={`${amaticSC.className} mb-8 text-center font-bold text-4xl text-[#FF4E50]`}>
          Latest blog posts
        </h1>
        {posts.map((post, idx) => (
          <PostTeaser key={idx} {...post} />
        ))} */}
        <Countdown />
      </div>
    </main>
  )
}
