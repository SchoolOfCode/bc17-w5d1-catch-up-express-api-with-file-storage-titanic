import express from "express";

import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
} from "./recipes.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// | GET   |     | | all recipes | { success: Boolean, payload: recipe array } |

app.get("/api/recipes", async (req, res) => {
  try {
      //const payload = await getRecipes();
      const payload = "it worked";
      res.status(200).json({
          "success": true,
          "payload": payload
      });
  } catch (error) {
      res.status(404).json({
          "error": error.message
      });
  }
});