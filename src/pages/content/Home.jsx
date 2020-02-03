import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from 'clsx';
import React from "react";
import { Button, Card, Image } from "semantic-ui-react";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex"
	},
	grow: {
		flexGrow: 1
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block"
		}
	},
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(3),
			width: "auto"
		}
	},
	searchIcon: {
		width: theme.spacing(7),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	inputRoot: {
		color: "inherit"
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 7),
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: 200
		}
	},
	sectionDesktop: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex"
		}
	},
	sectionMobile: {
		display: "flex",
		[theme.breakpoints.up("md")]: {
			display: "none"
		}
	},
	hide: {
		display: "none"
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: "nowrap"
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	drawerClose: {
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		overflowX: "hidden",
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up("sm")]: {
			width: theme.spacing(9) + 1
		}
	},
	toolbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3)
	},
	content2: {
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

export default function Home(props) {
	const classes = useStyles();
    const theme = useTheme();
    const open = React.useState(props.isOpen);
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
