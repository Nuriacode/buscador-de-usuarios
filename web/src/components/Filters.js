import FilterGender from "./FilterGender";
import FilterInput from "./FilterInput";
import "../components/styles/layout/filters.scss"
import PropTypes from "prop-types";

const Filters = ({handelFilterGender, gender, setInputSearch, searchName}) => {
  const handleSumbit = (ev) => {
    ev.preventDefault();
  };
  return (
    <section className="filters">
      <form className="filters__form"
      onSubmit={handleSumbit}
      >
        <FilterInput
        className="filters__form--input"
        searchName={searchName}
        setInputSearch={setInputSearch}
        />
        <FilterGender
        handelFilterGender={handelFilterGender}
        gender={gender}
        />
      </form>
    </section>
  );
};

Filters.propTypes = {
    handelFilterGender: PropTypes.func.isRequired,
    setInputSearch: PropTypes.func.isRequired,
    gender: PropTypes.string.isRequired,
    searchName: PropTypes.string.isRequired,
};

export default Filters;
