import { amaticSC } from '@/app/styles/fonts'
import { Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import Thumbnail from './Thumbnail'

export default function PostTeaser(post: Post) {
  return (
    <div className="mb-8  flex flex-row">
      <Thumbnail
        className="mr-2 self-center"
        src={post.thumbnail}
        title={post.title}
      />
      <div className="flex flex-col">
        <h2 className="mb-1 text-xl">
          <Link
            href={post.url}
            className={`${amaticSC.className} font-bold text-2xl underline pr-1 pl-1 text-[#FF4E50] hover:bg-[#F9D423]`}>
            {post.title}
          </Link>
        </h2>
        <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
      </div>
    </div>
  )
}
