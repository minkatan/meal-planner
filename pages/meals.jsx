import Image from 'next/image'
import unavailable from '../assets/images/unavailable.jpg'

const Meals = ( { meals }) => {
  return (
    <>
    <Image
        src={unavailable}
        alt='1'
        width={500}
        height={500}
    />

    </>
  )
}

export default Meals