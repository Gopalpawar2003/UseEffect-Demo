import { useEffect, useState } from "react";
import "../style/style.css";

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
        fetchUsers();
       }   , [])

       return (
        <>
        <h2 className="heading">Users</h2>
        <div className="container">
        
            {users.map((user) => {

                return (
                <div id ={user.id} className="card"> 
                    <h3>{user.name}</h3>
                    <h4>{user.email}</h4>
                </div>
                );
            })}

        </div>
        </>
)   


}
export default Userlist;