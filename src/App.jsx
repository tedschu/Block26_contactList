import { useState } from 'react'
import './index.css'
import ContactList from './components/ContactList'
import "./App.css";
import SelectedContact from './components/SelectedContact';



export default function App() {

    const [selectedContactId, setSelectedContactId] = useState(null);

    console.log(selectedContactId)

    return (
      <>
      {selectedContactId ? (
        <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={selectedContactId}/>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId}/>
      )}
      </>
    );
}


// setSelectedContactId={setSelectedContactId}





