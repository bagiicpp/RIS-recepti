package um.feri.si.ris_backend.service;

import org.springframework.stereotype.Service;
import um.feri.si.ris_backend.model.Recipe;
import um.feri.si.ris_backend.repository.RecipeRepository;

import java.util.List;

@Service
public class RecipeService {

    private final RecipeRepository recipeRepository;

    public RecipeService(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    public Recipe addRecipe(Recipe recipe) {
        if (recipe.getName() == null || recipe.getName().isEmpty()) {
            throw new IllegalArgumentException("You must provide a name for the recipe");
        }

        if (recipe.getDescription() == null || recipe.getDescription().isEmpty()) {
            throw new IllegalArgumentException("You must provide a description for the recipe");
        }

        return this.recipeRepository.save(recipe);
    }

    public List<Recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }
}
