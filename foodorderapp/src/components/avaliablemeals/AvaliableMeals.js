import React, { useEffect, useState } from 'react'
import './AvaliableMeals.css'
import Card from '../card/Card';
import MealItem from '../mealitem/MealItem';


const AvaliableMeals = () => {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://react-foodapp-ac153-default-rtdb.firebaseio.com/meals.json')
        const data = await response.json()
        const loadedMeals = []

        for (const key in data) {
          loadedMeals.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price
          })
        }
        setMeals(loadedMeals)
      } catch (err) {
        return err
      }
    }
    fetchMeals()

  }, [])

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />

  ))

  return (
    <>
      <section className='meals'>
        <ul>
          <Card>
            {mealsList}
          </Card>
        </ul>
      </section>
    </>
  )
}

export default AvaliableMeals
