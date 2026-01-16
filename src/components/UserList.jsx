import { useEffect, useState } from "react";

function Userlist() {
    // need something to store the data
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // fetch data from the API
        const fetchUsers = async () => {
            try {

                const response = await fetch('https://jsonplaceholder.typicode.com/users');

                if (!response.ok) {
                    throw new Error('something went wrong' + response.status);

                }

                const data = await response.json();
                setUsers(data);

            }
            catch (error) {

                console.error(error.message);

            }
        }
        fetchData();
       }   , [])


}
export default Userlist;