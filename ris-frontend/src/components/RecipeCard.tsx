import { TrashIcon, PencilIcon } from '@heroicons/react/16/solid';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'sonner';
import EditRecipeForm from './EditRecipeForm';

type RecipeType = {
  id: number;
  name: string;
  description: string;
  category: string;
  date_of_creation: string;
};

type RecipeCardType = {
  id: number;
  name: string;
  description: string;
  category: string;
  date_of_creation: string;
  setRecipes: React.Dispatch<React.SetStateAction<RecipeType[]>>;
};

const RecipeCard: React.FC<RecipeCardType> = ({
  id,
  name,
  description,
  category,
  date_of_creation,
  setRecipes,
}) => {
  const [editRecipeForm, setEditRecipeForm] = useState(false);

  return (
    <>
      <div className="bg-[#222222] rounded-md p-4 flex flex-col justify-between">
        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl font-bold text-center mb-4">{name}</h1>
          <p>{category}</p>
          <p>{description}</p>
          <p>{date_of_creation}</p>
        </div>
        <div className="flex space-x-3">
          <PencilIcon
            onClick={() => {
              setEditRecipeForm(!editRecipeForm);
            }}
            className="w-8 bg-[#2e2e2e] p-1 border border-[#3a3a3a] rounded hover:text-[#F5CB5C] hover:shadow-[0_0_10px_rgba(245,203,92,0.2)] shadow cursor-pointer duration-200 ease-in-out"
          />{' '}
          <TrashIcon
            onClick={() => {
              toast.promise(
                axios
                  .delete(`http://localhost:8080/api/recipe/${id}`)
                  .then(() => {
                    setRecipes((prevRecipes) =>
                      prevRecipes.filter((recipe) => recipe.id !== id)
                    );
                  })
                  .catch((err) => console.error(err)),
                {
                  loading: `Deleting ${name}...`,
                  success: `Successfully deleted ${name}`,
                  error: `An error occured while deleting ${name}`,
                }
              );
            }}
            className="w-8 bg-[#2e2e2e] p-1 border border-[#3a3a3a] rounded hover:text-red-400 hover:shadow-[0_0_10px_rgba(255,100,103,0.2)] cursor-pointer duration-200 ease-in-out"
          />
        </div>
      </div>
      {editRecipeForm && (
        <EditRecipeForm
          id={id}
          name={name}
          description={description}
          category={category}
          date_of_creation={date_of_creation}
          setRecipes={setRecipes}
        />
      )}
    </>
  );
};

export default RecipeCard;
