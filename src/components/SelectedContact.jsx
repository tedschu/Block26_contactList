import {useState, useEffect} from "react";
import ContactRow from "./ContactRow";



export default function SelectedContact({selectedContactId,setSelectedContactId}) {

    const [contact, setContact] = useState(null)   // alternatively could use load or empty object


    async function fetchSingleContact() {

            const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/"+selectedContactId);
            return await response.json();
        }



    useEffect(()=> {
 
            fetchSingleContact().then((response)=> {
                setContact(response);
                console.log(response)

            })
            
        
    },[contact])

      // console.log("Name: " + contact.name)

        return (
            <>
            {contact ?  <table>    
                <thead>
                    <tr>
                        <th colSpan="3">Contact List</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name: {contact.name}</td>
                        <td>Email: {contact.email}</td>
                        <td>Phone: {contact.phone}</td>
                        <td>City: {contact.address.city}</td>

                    </tr>
                    
                </tbody>
            </table>
            : <h2>You are not getting any data</h2>}

            </>
        
        );

}


// useEffect(()=> {
//     async function fetchSingleContact() {
//         try {
//             const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/"+selectedContactId);
//             const result = await response.json();
//             setContact(result);
//             console.log(response)
//         } catch(error) {
//             console.error(error);
//         }
//     }
//     fetchSingleContact();
// },[selectedContactId])