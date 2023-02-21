import useCategories from "../../hooks/useCategories";
import { Category } from "../../interfaces/interfaces";
import useProducts from '../../hooks/useProducts';

type Props = {
  category: Category
}

const CategoryItem = ({category} : Props) => {
  const { id, name, image } = category;

  const { selectCategory } = useCategories();

  const { getProducts } = useProducts();

  const handleCategory = (id: number) => {
    selectCategory(id);
    getProducts(id);
  }

  return ( 
    <div className="list-cards__block" onClick={() => handleCategory(id)}>
      <img src={image} alt="" />
      <h4>{name}</h4>
    </div>
  );
}
 
export default CategoryItem;