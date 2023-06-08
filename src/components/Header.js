import "../components/styles/layout/header.scss";

const Header = () => {
  return (
    <header className="header">
      <img className="header__img" src="" alt="" />
      <h1 className="header__title">Listado de</h1>
      <h1 className="header__title2"> Usuarios</h1>
      <div className="header__circle">
        <i className="header__circle--icon fa-solid fa-user"></i>
      </div>
    </header>
  );
};

export default Header;
