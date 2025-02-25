import { urlForImage } from '../lib/sanity.image'
import Image from 'next/image'
import 'react-medium-image-zoom/dist/styles.css'

interface DetailImageProps {
  title: string
  image: any
  priority?: boolean
}

export default function DetailImage({ title, image: source, priority }: DetailImageProps) {
  // Let's add console.log to debug the image source and URL
  console.log('Image source:', source);
  
  if (!source?.asset?._ref) {
    console.log('No image asset reference found');
    return <div className="h-[600px] bg-gray-100" />
  }

  const imageUrl = urlForImage(source).url();
  console.log('Generated image URL:', imageUrl);

  return (
    <div className="w-full h-[600px] relative">
      <Image 
        src={imageUrl}
        alt={title}
        fill
        className="object-contain"
        priority={priority}
      />
    </div>
  )
}