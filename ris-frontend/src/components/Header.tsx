import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import AddRecipeForm from './AddRecipeForm';

gsap.registerPlugin(useGSAP);

type RecipeType = {
  id: number;
  name: string;
  description: string;
  category: string;
  date_of_creation: string;
};

type HeaderType = {
  setRecipes: React.Dispatch<React.SetStateAction<RecipeType[]>>;
};

const Header: React.FC<HeaderType> = ({ setRecipes }) => {
  const [formVisible, setFormVisible] = useState(false);

  useGSAP(() => {
    if (formVisible) {
      gsap.fromTo(
        '.add-recipe-form',
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [formVisible]);

  return (
    <div className="bg-[#222222]">
      <div className="flex justify-between p-4 container mx-auto items-center">
        <p className="text-2xl font-bold hover:text-[#F5CB5C]">RecipeVwr</p>
        <div>
          <p
            className="hover:text-[#F5CB5C] cursor-pointer"
            onClick={() => setFormVisible(!formVisible)}
          >
            New Recipe
          </p>
          {formVisible && (
            <AddRecipeForm
              setFormVisible={setFormVisible}
              formVisible={formVisible}
              setRecipes={setRecipes}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
