const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = 'https://api.spoonacular.com'

const requests = {
  fetchWeekMealPlan: `${BASE_URL}/mealplanner/generate?apiKey=${API_KEY}&timeFrame=week&targetCalories=1600`,
  fetchDayMealPlan: `${BASE_URL}/mealplanner/generate?apiKey=${API_KEY}&timeFrame=day&targetCalories=1600`,
}

export default requests