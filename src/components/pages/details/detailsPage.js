import { Card, ListGroup, ListGroupItem, Row, Col, Container, Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import { useHistory } from "react-router"
import selectors from "../../Redux/selectors/filmsSelectors"

export default function DetailsPage() {
    const history = useHistory('')
    const details = useSelector(selectors.filmById)

    return (
        <Container>
            <Button variant='secondary' onClick={() => history.goBack()} className='mt-3 float-right'>Back</Button>
            <Card className='mt-3 border-3 c'>
                <Row>
                    <Col sm='4'>
                        <Card.Img variant="left" src={details.Poster} />
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>{details.Title}</Card.Title>
                            <Card.Text>{details.Plot}</Card.Text>
                            <Card.Text>{details.Type}</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Year: {details.Year}</ListGroupItem>
                            <ListGroupItem>Rated: {details.Rated}</ListGroupItem>
                            <ListGroupItem>Released: {details.Released}</ListGroupItem>
                            <ListGroupItem>Runtime: {details.Runtime}</ListGroupItem>
                            <ListGroupItem>Genre: {details.Genre}</ListGroupItem>
                            <ListGroupItem>Director: {details.Director}</ListGroupItem>
                            <ListGroupItem>Writer: {details.Writer}</ListGroupItem>
                            <ListGroupItem>Actors: {details.Actors}</ListGroupItem>
                            <ListGroupItem>Language: {details.Language}</ListGroupItem>
                            <ListGroupItem>Country: {details.Country}</ListGroupItem>
                            <ListGroupItem>Awards: {details.Awards}</ListGroupItem>
                            <ListGroupItem>imdbRating: {details.imdbRating}</ListGroupItem>
                            <ListGroupItem>imdbVotes: {details.imdbVotes}</ListGroupItem>
                            <ListGroupItem>Website: {details.Website}</ListGroupItem>
                            <ListGroupItem>Response: {details.Response}</ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}