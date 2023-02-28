import { GroupPreference } from "../../interfaces/interfaces";
import GroupPreferenceItem from "./GroupPreferenceItem";

type Props = {
  groups_preference: GroupPreference[]
}

const ListGroupPreferences = ({groups_preference}: Props) => {
  return (
    <div className="col-md-12 mt-2">
      <p style={{marginBottom: '.5rem'}}>Preferences Group</p>
      <div className="card-body select-preferences">
        <ul className="list-groups">
          { groups_preference.map((group_preference, index) =>
              <GroupPreferenceItem key={index} group_preference={group_preference}/>
          ) }
        </ul>
      </div>
    </div>
  );
}
 
export default ListGroupPreferences;