import { ListGroupItem, ListGroup, Button, Container } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import actions from "../../Redux/actions/filmsActions"
import { detailInfo } from "../../Redux/operations/filmsOperations"
import selectors from "../../Redux/selectors/filmsSelectors"

export default function FavoriteFilms() {
    const history = useHistory('')
    const dispatch = useDispatch('')
    const myFilms = useSelector(selectors.myFilms)

    const handleClick = async (e, id) => {
        const { localName } = e.target
        if (localName === 'button' || localName === 'svg' || localName === 'path') {
            dispatch(actions.deleteFilm(id))
        } else {
            dispatch(detailInfo(id))
            history.push('/details')
        }
    }

    return (
        <>
            <Container fluid>
                <ListGroup as="ul" className="mt-3 justify-content-center">
                    {myFilms?.map(f =>
                        <ListGroupItem action key={f.imdbID} className='mt-3 border-3 d-flex' as='li' onClick={(e) => handleClick(e, f.imdbID)}>
                            <div className="ms-4 w-25">Title: {f.Title}</div>
                            <div className="ms-4 w-25">Type: {f.Type}</div>
                            <div className="ms-4 me-auto">Year: {f.Year}</div>
                            <Button onClick={(e) => handleClick(e, f.imdbID)} variant='outline-danger'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                </svg>
                            </Button>
                        </ListGroupItem>
                    )
                    }
                </ListGroup>
            </Container>

        </>
    )
}