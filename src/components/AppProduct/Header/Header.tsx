import { Navbar, Container } from 'react-bootstrap'

export const Header = () => {
  return (
    <Navbar style={{ backgroundColor: '#eeee' }}>
      <Container>
        <Navbar.Brand href='#home'>Carga de productos</Navbar.Brand>
      </Container>
    </Navbar>
  )
}
