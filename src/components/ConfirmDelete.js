import { Header, Icon } from "semantic-ui-react";

const ConfirmDelete = (props) => {
	const { id, name, email } = props.location.state.contact;
	console.log(id);
	const deleteContactHandler = (id) => {
		props.getContactId(id);
	};
	return (
		<div>
			<Header as="h2">
				Are you sure you want to delete {name}? {id}
			</Header>
			{/* <ContactDetail /> */}
			<Icon
				name="trash alternate outline"
				color="red"
				onClick={() => deleteContactHandler(id)}
			/>
		</div>
	);
};

export default ConfirmDelete;
