import { amaticSC } from '@/app/styles/fonts'
import { Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'

export default function PostTeaser(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={post.url}
          className={`${amaticSC.className} font-bold text-2xl`}>
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <div
        className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: post.body.raw.slice(0, 200) }}
      />
    </div>
  )
}
