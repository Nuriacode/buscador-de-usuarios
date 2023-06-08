import PropTypes from "prop-types";

const FilterGender = ({ handelFilterGender}) => {

  const handleChange = (ev) => {
    handelFilterGender(ev.target.value);
  };

  return (
    <div>
   <label 
   className=""
    htmlFor="gender"
   >
    Género
   </label>
   <select
   className=""
   name="gender"
   id="gender"
   onChange={handleChange}
   >
    <option value="all">Todos</option>
    <option value="female">Mujer</option>
    <option value="male">Hombre</option>
   </select>
    </div>
  );
};

FilterGender.propTypes = {
    handelFilterGender: PropTypes.func.isRequired,
};

export default FilterGender;
