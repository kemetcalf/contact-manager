import { useState, useEffect } from "react";
import { uuid } from "uuidv4";

function useContacts() {
	const LOCAL_STORAGE_KEY = "contacts";
	const [contacts, setContacts] = useState([]);

	const addContactHandler = (contact) => {
		console.log(contact);
		setContacts([...contacts, { id: uuid(), ...contact }]);
	};

	const removeContactHandler = (id) => {
		const newContactList = contacts.filter((contact) => {
			return contact.id !== id;
		});

		setContacts(newContactList);
	};

	useEffect(() => {
		const retrieveContacts = JSON.parse(
			localStorage.getItem(LOCAL_STORAGE_KEY)
		);
		if (retrieveContacts) setContacts(retrieveContacts);
	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
	}, [contacts]);
	return { contacts, addContactHandler, removeContactHandler };
}

export default useContacts;
