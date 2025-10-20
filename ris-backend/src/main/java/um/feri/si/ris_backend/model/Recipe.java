package um.feri.si.ris_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;

    String name;
    String description;
    String category;
    String date_of_creation;

    public Recipe() {}

    public Recipe(String name, String description) {
        this.name = name;
        this.description = description;
    }
}
