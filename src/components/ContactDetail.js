import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Icon } from "semantic-ui-react";
import user from "../images/user.png";

const ContactDetail = (props) => {
	const { name, email } = props.location.state.contact;
	return (
		<div className="main">
			<Link to="/">
				<Button color="blue" circular icon>
					<Icon name="arrow alternate circle left outline" size="large" />
				</Button>
			</Link>
			<Card image={user} header={name} description={email} centered></Card>
		</div>
	);
};

export default ContactDetail;
