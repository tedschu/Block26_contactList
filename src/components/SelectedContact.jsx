import {useState, useEffect} from "react";
import ContactRow from "./ContactRow";



export default function SelectedContact({selectedContactId,setSelectedContactId}) {

    const [contact, setContact] = useState(null)


    useEffect(()=> {
        async function fetchSingleContact() {
            try {
                const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/"+selectedContactId);
                const result = await response.json();
                setContact(result);

            } catch(error) {
                console.error(error);
            }
        }
        fetchSingleContact();
    },[selectedContactId])

      // console.log("Name: " + contact.name)

        return (
            <>
            <table>
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
        </>
        );

}