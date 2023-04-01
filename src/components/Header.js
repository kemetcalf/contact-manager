import React from "react";
import { Container, Header } from "semantic-ui-react";

const HeaderSection = () => {
	return (
		<div>
			<Container textAlign="center">
				<Header as="h1" dividing style={{ margin: "25px" }}>
					Contact Manager
				</Header>
			</Container>
		</div>
	);
};

export default HeaderSection;
