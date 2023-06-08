import { Link } from "react-router-dom";
import "./styles/layout/personCard.scss";
import PropTypes from "prop-types";

const PersonCard = ({ eachUser }) => {
  return (
    <Link className="linkDetail" to={`/contact/${eachUser.id}`}>
      <li className="userDetail">
        <img
          className="userDetail__img"
          src={eachUser.picture}
          alt="Foto de"
          title="Foto de"
        ></img>
        <h4 className="userDetail__name">
          <i class="fa-solid fa-user"></i>
          {eachUser.name} {eachUser.lastName}
        </h4>
        <p>
          {" "}
          <i class="fa-solid fa-location-dot"></i> {eachUser.city}
        </p>
        <p>More info.</p>
      </li>
    </Link>
  );
};

PersonCard.propTypes = {
  eachUser: PropTypes.func.isRequired,
};

export default PersonCard;
