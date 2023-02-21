import useProducts from "../../hooks/useProducts";
import { Preference } from "../../interfaces/interfaces";

type Props = {
  preference: Preference,
  state: string,
  index: number
}

const PreferenceItem = ({index, preference, state}: Props) => {
  const { addPreference, removePreference, product } = useProducts();

  const handlePreference = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (state === 'select') {
      const validation = validateSelectedPreferences();
      if (validation) {
        addPreference(preference);
      } else {
        alert('Exceeded available preference stock');
      }
    } else {
      removePreference(index);
    }
  }

  const validateSelectedPreferences = () : boolean => {
    let isValid = true;
    if (product) {
      const { groups_preference, selected_quantity } = product;
      if (groups_preference) {
        /* const group_preference = groups_preference.filter(group_preference => group_preference.id = group_preference_id)[0];
        const { max_quantity, minimum_required, preferences } = group_preference;
        if (max_quantity === -1) return true;
        const maxPreferences = selected_quantity * max_quantity;
        let countSelectedPreferences = 0;
        preferences.forEach(preference => {
          countSelectedPreferences += preference.selected_quantity;
        });
        if (countSelectedPreferences > maxPreferences) {
          isValid = false;
        } */
      }
    }

    return isValid;
  }

  return (
    <a 
      href="#!"
      className="btn btn-sm mb-2 green"
      onClick={handlePreference}
    >{preference.name}</a>
  );
}
 
export default PreferenceItem;