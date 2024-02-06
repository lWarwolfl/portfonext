import React, { useRef } from 'react'

type SplittedContainerProps = {
   id?: string
   className?: string
   children: React.ReactNode
}

export default function SplittedContainer({
   id = '',
   className = '',
   children,
}: SplittedContainerProps) {
   const containerRef = useRef<HTMLDivElement>(null)

   return (
      <div ref={containerRef} id={id} className={`splitted-container ${className}`}>
         {children}
      </div>
   )
}
