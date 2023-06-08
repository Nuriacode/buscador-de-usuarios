import PersonCard from "./PersonCard";
import './styles/layout/peopleList.scss';
import PropTypes from 'prop-types';

const PeopleList = ({userFiltered }) => {

    const data = userFiltered.map((eachUser) => {
        return <PersonCard 
        eachUser={eachUser}
        key={eachUser.id}
        />
    });
    return (
        <section>
            <ul className="userList">
                {data}
            </ul>
        </section>
    )
};

PeopleList.propTypes = {
    userFiltered: PropTypes.func.isRequired
};

export default PeopleList;
