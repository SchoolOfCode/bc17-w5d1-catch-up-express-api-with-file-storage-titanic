import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const fileName = "recipes.json";

// Read JSON file
async function readJsonFile(filePath) { 
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        const jsonData = JSON.parse(data);
        return jsonData;
    } catch (error) {
        console.error('Error reading file:', error);
    }
}

// Write to a JSON file
async function writeJsonFile(filePath, data) {
    try {
        const stringifiedData = JSON.stringify(data, null, 2);
        await fs.writeFile(filePath, stringifiedData);
        console.log("File written successfully!");
    } catch (error) {
        console.error("Error writing file:", error);
    }
}

// GET ALL RECIPES by calling readJsonFile function
export async function getRecipes() {
    return await readJsonFile(fileName);
}

// GET A RECIPE BY ID
export async function getRecipeByID(id) {
    const allRecipes = await readJsonFile(fileName); //array all recipes
    const index = allRecipes.findIndex(recipe => recipe.id === id);

    if (index === -1) {
        throw new Error(`No recipe with ID ${id} found.`);
    }

    return allRecipes[index];
}

// CREATE A RECIPE
export async function createRecipe(newRecipe) {
 
}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) {}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {}

