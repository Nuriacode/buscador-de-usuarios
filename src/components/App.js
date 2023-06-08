import { useEffect, useState } from "react";
import Header from "./Header";
import getDataApi from "../services/api";
import PeopleList from "./PeopleList";
import { Route, Routes, matchPath, useLocation } from "react-router-dom";
import UserDetail from "./UserDetail";
import Footer from "./Footer";
import Filters from "./Filters";

function App() {
  const [listUsers, setListUsers] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [gender, setGender] = useState("all");

  useEffect(() => {
    getDataApi().then((data) => {
      setListUsers(data);
    });
  }, []);

  const setInputSearch = (value) => {
    setSearchName(value);
  };

  const handelFilterGender = (value) => {
    setGender(value);
  };

  const userFiltered = listUsers
    .filter((eachUser) =>
      eachUser.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
    )
    .filter((eachUser) => {
      return gender === "all" ? true : eachUser.gender === gender;
    });

  const { pathname } = useLocation();
  const dataUrl = matchPath("/contact/:id", pathname);
  console.log(dataUrl);

  const userId = dataUrl !== null ? dataUrl.params.id : null;

  const userFind = listUsers.find((eachUser) => eachUser.id === userId);

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  searchName={searchName}
                  setInputSearch={setInputSearch}
                  gender={gender}
                  handelFilterGender={handelFilterGender}
                />
                <PeopleList userFiltered={userFiltered} />
              </>
            }
          ></Route>
          <Route
            path="/contact/:id"
            element={<UserDetail userFind={userFind} />}
          ></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
