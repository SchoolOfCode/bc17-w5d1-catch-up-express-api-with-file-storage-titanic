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

//GET { success: Boolean, payload: recipe array } | http://localhost:3000/api/recipes/4c848d48-b81e-4d6f-b45d-7b3090f4f8ef

app.get("/api/recipes", async (req, res) => {
  const payload = await getRecipes();
  try {
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

//  GET    | /api/recipes/:id | | recipes with a particular id if it exists | { success: Boolean, payload: recipe }       | 
app.get("/api/recipes/:id", async (req, res) => {
  const id = req.params.id; 
  const payload = await getRecipeByID(id);
  try { 
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

//| POST   | /api/recipes | { body } | create a new recipe | { success: Boolean, payload: recipe }       |
// ()   {}   []   ‘`
app.post('/api/recipes' ,async(req, res) => {
  const newRecipe = req.body; 
  try {
  //const payload = "it worked";
  const payload = `your new recipe is ${newRecipe}`;
    res.status(200).json({
      "success": true,
      "payload": payload
    }); 
  }
  catch (error) {
      res.status(400).json({
        "error": error.message
      });
    }
  });

//| PATCH  | /api/recipes/:id | { body }   | updated recipe | { success: Boolean, payload: recipe } 
app.patch('/api/recipes/:id',async(req, res) => {
  const updateRecipe = req.body;
  const id = req.params.id; 
  try { 
    const payload = `your ID is ${id}`;  
    res.status(200).json({
    "success": true,
    "payload": payload
  }); 
  }
  catch (error) {
    res.status(400).json({
      "error": error.message
    });
  }
});

// | DELETE | /api/recipes/:id | | { success: Boolean, payload: recipe }       |
app.delete('/api/recipes/:id' , async(req, res) => {
  const deleteRecipe = req.body;
  const id = req.params.id;
try { 
  const payload = `your ID is ${id}`;  
  res.status(200).json({
  "success": true,
  "payload": payload
}); 
}
catch (error) {
  res.status(400).json({
    "error": error.message
  });
}
});


/*app.post('/activities', (req, res) => {
    const id = uuidv4();
    const activity_submitted = Date.now();
    const newActivity = {
        id,
        activity_submitted,
        ...req.body
    };  
    if (!newActivity.activity_type){
        res.status(400).json({ error: 'Failed because activity_type is required' });
    }; 
    if (!newActivity.activity_duration){
        res.status(400).json({ error: 'Failed because activity_duration is required' });
    }; 
    if (typeof newActivity.activity_type !== 'string') {
       return res.status(400).json({
        error: 'Invalid request format. Ensure activity_type is a string .'});
    };
    if (typeof newActivity.activity_duration !== "number")  {
        return res.status(400).json({
            error: 'Invalid request format. Ensure activity_duration is a number .'
        });
    //};*/