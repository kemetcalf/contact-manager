import { Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ConfirmDelete = (props) => {
	const { id, name, email } = props.location.state.contact;
	console.log(props.location.state.contact);
	const deleteContactHandler = (id) => {
		props.getContactId(id);
	};
	return (
		<div>
			<Header as="h2">
				Are you sure you want to delete {name}? {id}
			</Header>
			{/* <ContactDetail /> */}
			<Link to="/">
				<Icon
					name="trash alternate outline"
					color="red"
					onClick={() => deleteContactHandler(id)}
				/>
			</Link>
		</div>
	);
};

export default ConfirmDelete;
