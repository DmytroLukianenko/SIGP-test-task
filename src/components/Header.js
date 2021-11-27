import { Navbar, Container, Nav } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

export default function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <LinkContainer to='/'><Nav.Link >Home</Nav.Link></LinkContainer>
                        <LinkContainer to='/favorite'><Nav.Link >favorite</Nav.Link></LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}