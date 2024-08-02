import Spinner from "../../ui/Spinner";
import { StyledStaffBox, StyledCircularImage } from "./StaffBox";

const staff = ({ staffs, isLoading }) => {
  return (
    <StyledStaffBox>
      {staffs.map((st) => (
        <div key={st.id}>
          <p>{st.name}</p>
          {isLoading ? <Spinner /> : <StyledCircularImage src={st.image} />}
        </div>
      ))}
    </StyledStaffBox>
  );
};

export default staff;
