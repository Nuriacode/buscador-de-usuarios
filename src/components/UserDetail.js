import { Link } from "react-router-dom";
import "./styles/layout/userDetail.scss";
import PropTypes from "prop-types";

const UserDetail = ({ userFind }) => {
  return (
    <section className="section">
      <article className="article">
        <div className="article__div">
          <Link
            className="article__div--link fa-solid fa-circle-arrow-left"
            to="/"
          ></Link>
          <img className="article__div--img" src={userFind.picture} alt="" />
        </div>
        <div className="article__div2">
          <h3 className="article__div2--name">
            {userFind.title} {userFind.name} {userFind.lastName}
          </h3>
          <p className="article__div2--text">Edad: {userFind.age}</p>
          <p className="article__div2--text">
            Genero: {userFind.gender === "male" ? "Hombre" : "Mujer"}
          </p>
          <p className="article__div2--text">Ciudad: {userFind.city}</p>
          <p className="article__div2--text">Pais: {userFind.country}</p>
          <p className="article__div2--text">
            Dirección: {userFind.streetName}, {userFind.streetNumber}
          </p>
          <p className="article__div2--text">C.P.: {userFind.postcode}</p>
          <p className="article__div2--text">e-mail: {userFind.email}</p>
          <p className="article__div2--text">Teléfono: {userFind.phone}</p>
          <p className="article__div2--text">Móvil: {userFind.cell}</p>
        </div>
      </article>
    </section>
  );
};

UserDetail.propTypes = {
  userFind: PropTypes.func.isRequired,
};

export default UserDetail;
