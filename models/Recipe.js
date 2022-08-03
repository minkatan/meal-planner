import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const RecipeSchema = new mongoose.Schema({
  name: {
    /* The name of this pet */

    type: String,
    required: [true, 'Enter recipe'],
  },
  time_required: {
    /* Pet's age, if applicable */
    type: Number,
  },
  favourite: {
    /* Boolean poddy_trained value, if applicable */
    type: Boolean,
  },
  ingredients: {
    /* List of dietary needs, if applicable */
    type: Array,
  },
  image_url: {
    /* Url to pet image */
    type: String,
  },
  recipe_url: {
    /* Url to pet image */
    type: String,
  },
})

export default mongoose.models.Recipe || mongoose.model('Recipe', RecipeSchema)
