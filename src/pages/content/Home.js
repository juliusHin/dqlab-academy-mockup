import React, { useState } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from 'clsx';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	toolbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		marginLeft: -drawerWidth
	},
	contentShift: {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: 0
	}
}));
export default function Home() {
	const classes = useStyles();
    const theme = useTheme();
    const open = React.useState(true);
	return (
        <main className={clsx(classes.content, { [classes.contentShift]: open })}>
				<div className={classes.toolbar} />

				<Card.Group>
					<Card>
						<Card.Content>
							<Image
								floated="right"
								size="large"
								src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
							/>
							<Card.Header>Steve Sanders</Card.Header>
							<Card.Meta>Friends of Elliot</Card.Meta>
							<Card.Description>
								Steve wants to add you to the group{" "}
								<strong>best friends</strong>
							</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<div className="ui two buttons">
								<Button basic color="green">
									Approve
								</Button>
								<Button basic color="red">
									Decline
								</Button>
							</div>
						</Card.Content>
					</Card>
					<Card>
						<Card.Content>
							<Image
								floated="right"
								size="large"
								src="https://react.semantic-ui.com/images/avatar/large/molly.png"
							/>
							<Card.Header>Molly Thomas</Card.Header>
							<Card.Meta>New User</Card.Meta>
							<Card.Description>
								Molly wants to add you to the group <strong>musicians</strong>
							</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<div className="ui two buttons">
								<Button basic color="green">
									Approve
								</Button>
								<Button basic color="red">
									Decline
								</Button>
							</div>
						</Card.Content>
					</Card>
					<Card>
						<Card.Content>
							<Image
								floated="right"
								size="large"
								src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
							/>
							<Card.Header>Jenny Lawrence</Card.Header>
							<Card.Meta>New User</Card.Meta>
							<Card.Description>
								Jenny requested permission to view your contact details
							</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<div className="ui two buttons">
								<Button basic color="green">
									Approve
								</Button>
								<Button basic color="red">
									Decline
								</Button>
							</div>
						</Card.Content>
					</Card>
				</Card.Group>
			</main>
	);
}
