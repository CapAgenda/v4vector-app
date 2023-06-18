import Image from "next/image"

type Props = {
    src: string,
    alt: string,
    priority?: string,
}

export default function PreviewImage({ src, alt, priority }: Props) {

    const prty = priority ? true : false

    console.log(src)



    return (

    
            <Image
                src={'https://raw.githubusercontent.com/capagenda/vectorposts/main/'+ src}
                alt={alt}
                width={450}
                height={450}
                priority={prty}
                className="h-[350px] w-full object-cover sm:h-[450px"
            />
        
  )
}
