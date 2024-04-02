import React, { FunctionComponent } from 'react'

const BeautyLink: FunctionComponent<{
  href: string
  children: string
  className?: string
}> = ({ href, children, className }) => {
  return (
    <a
      href={href}
      target="blank"
      className={`text-black underline font-bold transition-colors duration-300 hover:text-[#FF4E50] hover:bg-transparent ${className}`}>
      {children}
    </a>
  )
}

export default BeautyLink
