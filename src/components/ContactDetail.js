import React from "react";
import { Link } from "react-router-dom";
import { Image, Card } from "semantic-ui-react";
import user from "../images/user.png";

const ContactDetail = (props) => {
	const { name, email } = props.location.state.contact;
	return (
		<div className="main">
			<Card image={user} header={name} description={email} centered></Card>
		</div>
	);
};

export default ContactDetail;
