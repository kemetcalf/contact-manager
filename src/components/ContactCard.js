import React from "react";
import { Link } from "react-router-dom";
import { Image, Icon, Container } from "semantic-ui-react";
import user from "../images/user.png";

const ContactCard = (props) => {
	const { id, name, email } = props.contact;
	return (
		<div className="item">
			<Image avatar src={user} alt="user" />
			<div className="content">
				<Link
					to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
				>
					<div className="header">{name}</div>
					<div>{email}</div>
				</Link>
			</div>
			<Container textAlign="right">
				<Link
					to={{ pathname: `/delete/${id}`, state: { contact: props.contact } }}
				>
					<Icon
						name="trash alternate outline"
						color="red"
						// onClick={() => props.clickHandler(id)}
					/>
				</Link>
			</Container>
		</div>
	);
};

export default ContactCard;
