import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import { Container, Button, Grid } from "semantic-ui-react";

const ContactList = (props) => {
	const deleteContactHandler = (id) => {
		props.getContactId(id);
	};

	const renderContactList = props.contacts.map((contact) => {
		return (
			<ContactCard
				contact={contact}
				clickHandler={deleteContactHandler}
				key={contact.id}
			/>
		);
	});

	return (
		<div>
			<Grid columns={2} divided>
				<Grid.Row>
					<Grid.Column>
						<h2>Contact list</h2>
					</Grid.Column>
					<Grid.Column>
						<Link to="/add">
							<Button color="blue" floated="right" content="Add Contact" />
						</Link>
					</Grid.Column>
				</Grid.Row>
			</Grid>

			<Container className="ui celled list">{renderContactList}</Container>
		</div>
	);
};

export default ContactList;
