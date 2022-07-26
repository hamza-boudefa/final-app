import {Navbar,Container,Nav} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../Redux/Actions/userActions'

function Header() {
   const {user}=useSelector(state=>state.loginDetails)
const dispatch=useDispatch()
let navigate=useNavigate()
   const handleLogout=()=>{
    dispatch(logout())
    navigate('/login')
   }

    return (
        
        <>
             <Navbar bg="primary" variant="dark">
                <Container>
                <LinkContainer to='/' >
                    <Navbar.Brand >Navbar</Navbar.Brand>
                </LinkContainer>
                <Nav className="me-auto">
                <LinkContainer to='/'>
                    <Nav.Link >Home</Nav.Link>
                </LinkContainer>
             { user && user.userId? <LinkContainer to={`/profile/${user.userId}`}>
                <Nav.Link >Profile</Nav.Link>
                </LinkContainer>

                :
                 <LinkContainer to='/login'>
                 <Nav.Link >Login</Nav.Link>
                 </LinkContainer>}
                 
                
                
                    
               
            

              {user && user.userId?  <Nav.Link ><button onClick={handleLogout}  >Log out</button></Nav.Link>

                :
                <LinkContainer to='/signIn'>
                <Nav.Link >SignIn</Nav.Link>
                </LinkContainer>}
                </Nav>
                </Container>
            </Navbar> 
        </>
    )
}

export default Header
