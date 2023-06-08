const getDataApi = () => {
    return(
        fetch ("https://randomuser.me/api?results=5&noinfo")
        .then ((response)=> response.json())
        .then ((data)=> {
            console.log(data)
            const dataOk = data.results.map ((eachPerson) => {
                return {
                    id: crypto.randomUUID(),
                    gender: eachPerson.gender,
                    picture: eachPerson.picture.large,
                    title: eachPerson.name.title,
                    name: eachPerson.name.first,
                    lastName: eachPerson.name.last,
                    city: eachPerson.location.city,
                    country: eachPerson.location.country,
                    streetNumber: eachPerson.location.street.number,
                    streetName: eachPerson.location.street.name,
                    postcode: eachPerson.location.postcode,
                    email: eachPerson.email,
                    age: eachPerson.dob.age,
                    cell: eachPerson.cell,
                    phone: eachPerson.phone,
                };
            });
            return dataOk
        })
    )
};

export default getDataApi;
