import { StyledStaffBox, StyledCircularImage } from "./StaffBox";

const staff = ({ staffs }) => {
  console.log(staffs);
  return (
    <StyledStaffBox>
      {staffs.map((st) => (
        <div key={st.id}>
          <p>{st.name}</p>
          <StyledCircularImage src={st.image} />
        </div>
      ))}
    </StyledStaffBox>
  );
};

export default staff;
