import PostTeaser from '@/components/PostTeaser'
import WorldMap from '@/components/WorldMap'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { amaticSC } from '../app/styles/fonts'
import Link from 'next/link'

export default function Home() {
  const latestPosts = allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 4)

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="self-stretch bg-gradient-to-r from-[#FF4E50]/[.7] to-[#F9D423]/[.7]">
        <WorldMap />
      </div>
      <div className="lg:w-1/2 md:w-4/5 sm:w-4/5 mx-auto p-8">
        <>
          <h1
            className={`${amaticSC.className} mb-8 text-center font-bold text-4xl text-[#FF4E50]`}>
            Latest blog posts
          </h1>
          {latestPosts.map((post, idx) => (
            <PostTeaser key={idx} {...post} />
          ))}
          <div className="text-center">
            <Link
              href="/allposts"
              className={`${amaticSC.className} font-bold text-xl underline pr-1 pl-1 text-[#FF4E50] hover:bg-[#F9D423]`}>
              See all
            </Link>
          </div>
        </>
      </div>
    </main>
  )
}
