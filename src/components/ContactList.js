import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import { Container, Button, Header } from "semantic-ui-react";

const ContactList = (props) => {
	// const deleteContactHandler = (id) => {
	// 	props.getContactId(id);
	// };

	const renderContactList = props.contacts.map((contact) => {
		return (
			<ContactCard
				contact={contact}
				// clickHandler={deleteContactHandler}
				key={contact.id}
			/>
		);
	});

	return (
		<div>
			<Header as="h2">
				Contact list
				<Link to="/add">
					<Button color="blue" floated="right" content="Add Contact" />
				</Link>
			</Header>

			<Container className="ui celled list">{renderContactList}</Container>
		</div>
	);
};

export default ContactList;
