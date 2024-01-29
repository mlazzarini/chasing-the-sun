'use client'

import { useRouter } from 'next/navigation'

import { Dialog } from '@/components/ui/dialog'

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  const onDismiss = () => {
    router.back()
  }

  return (
    <Dialog open={true} onOpenChange={onDismiss}>
      {children}
    </Dialog>
  )
}
