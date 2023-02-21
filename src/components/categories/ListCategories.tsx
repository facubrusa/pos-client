import { useEffect } from "react";
import CategoryItem from './CategoryItem';
import useCategories from "../../hooks/useCategories";

const ListCategories = () => {

  const { categories, getCategories } = useCategories();

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line
  }, []);

  return ( 
    <div className="list-cards list-cards--movie">
      { categories.length > 0 ? 
        categories.map(category => 
          <CategoryItem 
            key={category.id} 
            category={category} 
          />
        ) : '' }
    </div>
  );
}
 
export default ListCategories;