import useProducts from "../../hooks/useProducts";
import PreferenceItem from "./PreferenceItem";

const SelectedPreferences = () => {
  const { selectedpreferences } = useProducts();

  return ( 
    <div className="col-md-7">
      <div className="list-detail">
        { selectedpreferences.length > 0 ? 
          selectedpreferences.map(({...preference}, index) => 
            <PreferenceItem 
              key={index} 
              index={index} 
              preference={preference} 
              state='selected' 
            />
          ) : '' }
      </div>
    </div>
  );
}
 
export default SelectedPreferences;