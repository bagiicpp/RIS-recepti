package um.feri.si.ris_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import um.feri.si.ris_backend.model.Recipe;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {}