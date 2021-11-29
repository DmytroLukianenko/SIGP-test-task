import { useState } from 'react'
import { Button, Form, Col, Row, Card, Container } from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { getQueryFilm, getMoreFilms, detailInfo } from '../../Redux/operations/filmsOperations'
import selectors from '../../Redux/selectors/filmsSelectors'
import actions from '../../Redux/actions/filmsActions'
import { useHistory } from 'react-router'

const SearchFilms = () => {
    const [query, setQuery] = useState('')
    const [page, setPage] = useState(2)
    const dispatch = useDispatch('')
    const history = useHistory('')
    const films = useSelector(selectors.queryFilms)
    const myFilms = useSelector(selectors.myFilms)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!query.length) {
            return toast.warning(`Search should contain at least 1 symbol`)
        }
        dispatch(getQueryFilm(query))
    }

    const handleInputChange = (e) => {
        const { value } = e.target
        setQuery(value)
    }
    const addFavFilm = (film) => {
        if (!myFilms.find(f => f.imdbID === film.imdbID)) {
            dispatch(actions.addFavoriteFilm(film))
        } else {
            dispatch(actions.deleteFilm(film.imdbID))
        }

    }

    const loadMore = () => {
        setPage(page + 1)
        dispatch(getMoreFilms(page, query))
    }

    const handleClick = (e, id) => {
        const { localName } = e.target
        if (localName === 'svg' || localName === 'path') {
            return
        } else {
            dispatch(detailInfo(id))
            history.push('/details')
        }
    }

    return (
        <>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Row className='mt-4 center'>
                        <Col sm='10'><Form.Control placeholder='Enter title of movie your are looking for' onChange={handleInputChange} min={1} /></Col>
                        <Col >
                            <Button type="submit" variant='warning'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill='white' viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </Button>
                        </Col>
                    </Row>
                </Form>
                <Row sm='12'>
                    {films && films.map(film =>
                        <Col key={film.imdbID} sm='4'>
                            <Card id={film.imdbID} bg='dark' border='secondary' text='light' className='mt-5 h-100' onClick={(event) => handleClick(event, film.imdbID)}>
                                <Card.Img variant="top" src={film.Poster} />
                                <Card.Body>
                                    <Row>
                                        <Col sm='10'><Card.Title>Title: {film.Title}</Card.Title></Col>
                                        <Col onClick={() => addFavFilm(film)} sm='2' className='justify-content-right' >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill={myFilms.find(f => f.imdbID === film.imdbID) ? 'orange' : 'white'} viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </Col>
                                    </Row>
                                    <Card.Text>Year: {film.Year}</Card.Text>
                                    <Card.Text>Type: {film.Type}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>)}
                    {films.length > 0 && <Button variant='warning' className='mt-5' onClick={loadMore}>Load More</Button>}
                </Row>
            </Container>
        </>
    )
}

export default connect()(SearchFilms)