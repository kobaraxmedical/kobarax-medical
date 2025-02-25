import cn from 'classnames'
import { urlForImage } from '../lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'

interface CoverImageProps {
  title: string
  slug?: string
  image: any
  priority?: boolean
}

export default function CoverImage(props: CoverImageProps) {
  const { title, slug, image: source, priority } = props
  const image = source?.asset?._ref ? (
      <div className="px-5 py-5 h-full bg-white rounded-3xl text-center transform duration-500 hover:-translate-y-2 cursor-pointer flex flex-col">
          <img
          src={urlForImage(source).height(1000).width(2000).url()}
          alt={title || "Product Image"}
          className="mx-auto"
      />
      </div>
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  )

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/product-single/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}