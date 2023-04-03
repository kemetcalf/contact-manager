import React from "react";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";
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
			<i
				className="trash alternate outline icon"
				style={{ color: "red", marginTop: "7px", alignSelf: "end" }}
				onClick={() => props.clickHandler(id)}
			></i>
		</div>
	);
};

export default ContactCard;
