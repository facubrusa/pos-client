import { GroupPreference } from "../../interfaces/interfaces";
import PreferenceItem from "./PreferenceItem";

type Props = {
  group_preference: GroupPreference
}

const GroupPreferenceItem = ({group_preference}: Props) => {
  const { id, name, max_quantity, minimum_required, preferences } = group_preference;
  const nameColumn = name.length > 7 ? 3 : 2;
  const preferencesColumn = 12 - nameColumn;
  return ( 
    <li className="row">
      <div className={'col-' + nameColumn}>
        <span>{name} ({max_quantity})</span>
        {minimum_required === 0 && <span className="required">*</span>}
      </div>
      <div className={'col-' + preferencesColumn} style={{paddingLeft: 0}}>
        { preferences.map((preference, index) => 
          <PreferenceItem 
            key={index} 
            index={index} 
            preference={preference}
            state='select'
          />
        )}
      </div>
    </li>
  );
}
 
export default GroupPreferenceItem;