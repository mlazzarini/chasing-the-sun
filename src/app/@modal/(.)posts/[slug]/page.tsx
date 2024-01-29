'use client'

import { Dialog } from '@/components/ui/dialog'
import { useRouter } from 'next/navigation'

import { allPosts } from 'contentlayer/generated'
import InterceptedDialogContent from './InterceptedDialogContent'

export default function PostModal({ params }: { params: { slug: string } }) {
  const router = useRouter()

  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return (
    <Dialog open onOpenChange={() => router.back()}>
      <Dialog open>
        <InterceptedDialogContent>Lala {params.slug}</InterceptedDialogContent>
      </Dialog>
    </Dialog>
  )
}
