import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (

<div className="flex flex-row gap-2 ">
  <Image
      src="/images/logo2.png"
      width={33 }
      height={33}
      alt="V4Vector Logo"
      priority={true}
      className="p-0 m-0"/>

    
  <h1 className="text-xl font-bold  grid place-conetent-center ">
      <Link 
      href="/" 
    className="no-underline text-black/90 hover:text-black">Vector Artwork</Link>
  </h1>
</div>


  )
}
