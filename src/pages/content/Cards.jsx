import CardActionArea from "@material-ui/core/CardActionArea";
import makeStyles from "@material-ui/core/styles/makeStyles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardBody, CardDeck, CardImg, CardSubtitle, CardText, CardTitle, Progress } from "reactstrap";

const FILM_SERVICE_URL = "https://swapi.co/api/films/1";

{
	/* 
	function FilmTableReactHooks(){
	const [data, setData] = useState({ films: [], isFetching: false});
	}

	*/
}
const useStyles = makeStyles(theme => ({
	media: {
		height: 480
	}
}));

{
	/* 
	fetchData = async function fetchFilmsAsync() {
	try {
		this.setState({...this.state, isFetching: true});
		const response = await axios.get(FILM_SERVICE_URL);
		this.setState({films: response.data, isFetching: false});
	} catch (error) {
		console.log(error);
		this.setState({...this.setState, isFetching: false})
	}
}
	*/
}

const CardList = () => {
	const classes = useStyles();
	const [hasError, setErrors] = useState("");
	const [load, setLoad] = useState(false);
	const [courses, setCourses] = useState([]);
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		axios
			.get("https://restcountries.eu/rest/v2/all")
			.then(res => {
				setCountries(res.data);
				setCourses([
					{
						courseName: "Python",
						courseSub: "belajarPython",
						courseImage:
							"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTfTv5ZikUM36Mpu-tKx0BIw9_o057WMEZfarcUIY7SYQ5cjK15",
						courseDesc:
							"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
						courseTotal: "200",
						courseFinished: "100"
					},
					{
						courseName: "R",
						courseSub: "belajarR",
						courseImage:
							"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTywOYpZx4U1NNl1u99tqJVc3pmnU7xA-NlMVPqNjqhl2QTmsj",
						courseDesc:
							"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
						courseTotal: "200",
						courseFinished: "100"
					},
					{
						courseName: "SQL",
						courseSub: "belajarSQL",
						courseImage:
							"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3zkHy2axO7tjYJzLoICLIjDvfDk6Sif9IFDgHlJ4ZCRKrk5Hy",
						courseDesc:
							"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
						courseTotal: "200",
						courseFinished: "100"
					}
				]);
				setLoad(true);
			})
			.catch(err => {
				setErrors(err.message);
				setLoad(true);
			});
	}, []);

	if (load) {
		return (
			<CardDeck>
				{hasError ? (
					<Card> {hasError.message} </Card>
				) : (
					courses.map((course, index) => (
						<Card key={index}>
							<CardActionArea>
								<CardImg
									top
									width="100%"
									src={course.courseImage}
									alt={course.courseName}
									className={classes.media}
								/>
								<CardBody>
									<CardTitle>{course.courseName}</CardTitle>
									<CardSubtitle>{course.courseSub} </CardSubtitle>
									<CardText>{course.courseDesc}</CardText>
									<div className="text-center">
										{course.courseFinished} of {course.courseTotal}{" "}
									</div>
									<Progress
										value={course.courseFinished}
										max={course.courseTotal}
									/>
								</CardBody>
							</CardActionArea>
						</Card>
					))
				)}
			</CardDeck>
		);
	} else {
		return <div>Loading ...</div>;
	}
};

export default CardList;
