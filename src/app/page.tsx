import Image from "next/image"
import ProductList from "@/components/ProductList";

const Homepage = () => {
  return (
    <div className=''>
      <div className="relative aspect-[3/1] mb-12"> {/*height will be three times smaller than width */}
        <Image
        src="/featured.png"
        alt="Banner"
        fill
        />
      </div>
      <ProductList/>
    </div>
  )
}

export default Homepage