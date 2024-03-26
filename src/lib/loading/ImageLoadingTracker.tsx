import Image, { type ImageProps } from 'next/image'
import { useEffect } from 'react'
import useLoadingStore from './useLoadingStore'

export default function ImageLoadingTracker(props: ImageProps) {
  const { registerAsset, assetLoaded } = useLoadingStore()

  useEffect(() => {
    registerAsset()
  }, [registerAsset])

  return (
    <Image
      {...props}
      alt="loading"
      onLoad={() => {
        assetLoaded()
      }}
    />
  )
}
