import Image from 'next/image'
import Header from '../components/Header'
import unavailable from '../assets/images/unavailable.jpg'
import { useState } from 'react'

const Index = ( { meals }) => {
  const [selectedRecipes, setSelectedRecipes] = useState([])
  const [isSelected, setSelected] = useState([])

  console.log(isSelected)

  const handleToggle = (index) => () => {
    setSelected(state => ({
      ...state,
      [index]: !state[index]
    }));
  }
  return (
    <>
    <Header />
    <div className='flex flex-row py-2 justify-between'>
      {/* <input
        type="checkbox"
        value={vegetarian}
        checked={}
        /> */}
    </div>
    <div className="grid grid-cols-3 gap-6 container mx-auto py-8">
    {meals?.map((meal, index) => {
        return(
            <div key={meal.id} 
              className={isSelected[index] ? "bg-gray-500 text-gray-50 rounded-lg shadow px-4 py-6" : "bg-gray-50 rounded-lg shadow px-4 py-6"}
              onClick={handleToggle(index)}>
              <div className='text-xl text-center font-semibold h-8 truncate'>{meal.title}</div>
              <Image
                  src={!meal.image ? unavailable : meal.image}
                  alt={meal.title}
                  width={400}
                  height={400}
                  className="rounded-xl shadow-lg"
              />
              <div className='flex flex-row justify-between'>
                <p>{meal.readyInMinutes} Minutes</p>
                <a href={meal.spoonacularSourceUrl}>Link to recipe</a>

              </div>
            </div>
        )
    })}
    </div>

    </>
  )
}

export default Index

export async function getStaticProps(){
    const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.NEXT_PUBLIC_API}&limitLicense=true&number=12&tags=?main%20course`)
    const data = await response.json()

    return {
        props: {
           meals: data.recipes, //original data is an object not array
        }
    }
}