import { XCircleIcon } from '@heroicons/react/16/solid';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'sonner';

type FormDataType = {
  id: number;
  name: string;
  description: string;
  category: string;
  date_of_creation: string;
};

type RecipeType = {
  id: number;
  name: string;
  description: string;
  category: string;
  date_of_creation: string;
};

type EditRecipeFormType = {
  setRecipes: React.Dispatch<React.SetStateAction<RecipeType[]>>;
};

const EditRecipeForm: React.FC<FormDataType & EditRecipeFormType> = ({
  id,
  name,
  description,
  category,
  date_of_creation,
  setRecipes,
}) => {
  const [formData, setFormData] = useState<FormDataType>({
    id: id,
    name: name,
    description: description,
    category: category,
    date_of_creation: date_of_creation,
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(formData);

        axios
          .post(`http://localhost:8080/api/recipe/edit/${id}`, formData)
          .then(() => {
            setRecipes((prevRecipes) =>
              prevRecipes.map((recipe) =>
                recipe.id === formData.id ? { ...formData } : recipe
              )
            );
          })
          .catch((err) => {
            console.error(err);
          });
      }}
      className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#222222] rounded-lg py-10 p-14 z-10 add-recipe-form space-y-6 flex flex-col"
    >
      <div onClick={() => {}}>
        <XCircleIcon className="h-7 absolute top-1/12 right-1/12 hover:text-[#F5CB5C] cursor-pointer self-end" />
      </div>

      <h1 className="text-xl text-center">Add new recipe</h1>

      <div>
        <label className="block mb-2 font-medium">Recipe Category</label>
        <select
          value={formData.category}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, category: e.target.value }))
          }
          className="w-full bg-[#2e2e2e] px-3 py-2 rounded"
        >
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 font-medium">Recipe Name</label>
        <input
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
          type="text"
          placeholder="Enter recipe name"
          className="w-full px-3 py-2 rounded bg-[#2e2e2e] transition-all duration-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#808080]"
        />
      </div>

      <div>
        <label className="block mb-2 font-medium" htmlFor="description">
          Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, description: e.target.value }))
          }
          id="description"
          placeholder="Enter recipe description..."
          className="w-full px-3 py-2 rounded bg-[#2e2e2e] transition-all duration-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-[#808080]"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-[#F5CB5C] text-gray-900 font-bold rounded hover:bg-[#c9a43e] transition-all duration-200 ease-in-out cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
};

export default EditRecipeForm;
