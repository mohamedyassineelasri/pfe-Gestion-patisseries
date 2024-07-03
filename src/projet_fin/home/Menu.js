import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom'; // Importez useNavigate depuis react-router-dom
import './stylenav.css';
import 'boxicons/css/boxicons.min.css';
import ScrollReveal from 'scrollreveal';

ScrollReveal({
    reset: true, 
    distance: '80px', 
    duration: 2000,   
    delay: 0,
});

function Menu() {
    const navigate = useNavigate(); // Utilisez useNavigate pour la navigation

    useEffect(() => {
        ScrollReveal().reveal('.fixed',{origin:'top',delay:50});
    }, []);

    const handleLogout = () => {
        // Effacez les données stockées localement
        localStorage.removeItem('user'); // Supposons que vous stockiez les informations de l'utilisateur dans 'user'
        // Naviguez vers la page d'accueil
        navigate('/');
    };

    return (
        <div>
            <Navbar className='navbar navbar-expand-lg fixed'  expand="lg" sticky='top'>
                <Container className='d-flex justify-content-beetwen'>
                    <Navbar.Brand href="/" style={{ fontFamily:'Oxygen'}}>
                        <h4>
                            <span style={{borderTop:'2px solid black',borderBottom:'2px solid black'}}><b>Pastries</b></span><br/><i>Tangier</i>
                        </h4>
                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className='icons' style={{justifyContent:'end'}}>
                        <Nav className="me-auto" style={{textAlign:'center',gap:'20px'}}>  
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/">Cakes&Specials</Nav.Link>
                            <Nav.Link href="/reservation">Reservation</Nav.Link>
                            <Nav.Link href="/panier">Order</Nav.Link>
                            <Nav.Link href="/about">About Us</Nav.Link>
                            <Nav.Link href="/conatct_no">Contact</Nav.Link>
                            <Nav.Link href="/signin" style={{marginLeft:'240px'}}><b><i>Signin</i></b></Nav.Link>
                        </Nav>
                        <Nav style={{gap:'0.5rem', alignItems:'center'}}>
                            <box-icon name='search'></box-icon>
                            <h3>
                                <i class='bx bx-search-alt-2' ></i>
                                <i class='bx bx-user'></i>
                                <i class='bx bx-heart'></i>
                            </h3>
                            <h3><i className='bx bxs-store'></i> </h3>
                            {/* Ajoutez un bouton pour la déconnexion */}
                            <button onClick={handleLogout} className="btn btn-outline-danger">Logout</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Menu;