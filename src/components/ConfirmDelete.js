import { Button, Container, Header, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ConfirmDelete = (props) => {
	const { id, name } = props.location.state.contact;

	console.log(props.location.state.contact);

	const deleteContactHandler = (id) => {
		props.getContactId(id);
	};

	return (
		<div>
			<Header as="h2" textAlign="center">
				Are you sure you want to <br /> delete {name}'s contact info?
			</Header>
			<Container textAlign="center">
				<Image src={user} as="a" inline />
			</Container>

			<Container textAlign="center">
				<Link to="/">
					<Button color="blue" circular icon>
						<Icon name="arrow alternate circle left outline" />
					</Button>
				</Link>
				<Link to="/">
					<Icon
						name="trash alternate outline"
						color="red"
						size="big"
						onClick={() => deleteContactHandler(id)}
					/>
				</Link>
			</Container>
		</div>
	);
};

export default ConfirmDelete;
