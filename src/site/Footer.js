import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
//import { useState } from 'react';


const Footer = () => {

    //keep padding, margins, fontFamily and fontWeights in for posible mod later

    // const footstyleLink = {
    //     color: "aqua",
    //     fontSize: "24px",
    //     padding: "5px 3px",
    //     fontFamily: "Papyrus",
    //     textDecoration: 'none'
    // };

    // const footstyleClick = {
    //     color: "slateblue",
    //     fontSize: "28px",
    //     padding: "5px 3px",
    //     fontFamily: "Papyrus",
    //     fontWeight: 100,
    //     textDecoration: 'none'
    // };

    // const footstyleHover = {
    //     color: "magenta",
    //     fontSize: "26px",
    //     padding: "5px 3px",
    //     fontFamily: "Papyrus",
    //     fontWeight: 900,
    //     textDecoration: 'none',
    //     cursor: 'crosshair'
    // };

    // const footstyleClick2 = {
    //     color: "magenta",
    //     fontSize: "28px",
    //     padding: "5px 3px",
    //     fontFamily: "Papyrus",
    //     fontWeight: 100,
    //     textDecoration: 'none'
    // };

    // const footstyleHover2 = {
    //     color: "white",
    //     fontSize: "26px",
    //     padding: "5px 3px",
    //     fontFamily: "Papyrus",
    //     fontWeight: 900,
    //     textDecoration: 'none',
    //     cursor: 'pointer'
    // };

    // const footstyleHover3 = {
    //     color: '#0d6efd',
    //     fontSize: '26px',
    //     padding: '5px 3px',
    //     fontFamily: 'Papyrus',
    //     fontWeight: 900,
    //     textDecoration: 'none',
    //     cursor: 'crosshair'
    // };

    // const footstyleHover4 = {
    //     color: "#a424ff",
    //     fontSize: "26px",
    //     padding: "5px 3px",
    //     fontFamily: "Papyrus",
    //     fontWeight: 900,
    //     textDecoration: 'none',
    //     cursor: 'pointer'
    // };
    // // Both functions and their nested callbacks provide slightly different changes for links
    // const useFeet = () => {
    //     const [style, setStyle] = useState(footstyleLink);
    //     const onMouseEnter = () => setStyle(footstyleHover)
    //     const onClick = () => setStyle(footstyleClick)
    //     const onMouseLeave = () => setStyle(footstyleLink)
    //     return { style, onClick, onMouseEnter, onMouseLeave }
    // }

    // const useFeet2 = () => {
    //     const [style, setStyle] = useState(footstyleLink);
    //     const onMouseEnter = () => setStyle(footstyleHover2)
    //     const onClick = () => setStyle(footstyleClick2)
    //     const onMouseLeave = () => setStyle(footstyleLink)
    //     return { style, onClick, onMouseEnter, onMouseLeave }
    // }

    // const useFeet3 = () => {
    //     const [style, setStyle] = useState(footstyleLink);
    //     const onMouseEnter = () => setStyle(footstyleHover3)
    //     const onClick = () => setStyle(footstyleClick)
    //     const onMouseLeave = () => setStyle(footstyleLink)
    //     return { style, onClick, onMouseEnter, onMouseLeave }
    // }

    // const useFeet4 = () => {
    //     const [style, setStyle] = useState(footstyleLink);
    //     const onMouseEnter = () => setStyle(footstyleHover4)
    //     const onClick = () => setStyle(footstyleClick2)
    //     const onMouseLeave = () => setStyle(footstyleLink)
    //     return { style, onClick, onMouseEnter, onMouseLeave }
    // }

    // // individual style calls for each link and heading


    // const bg1 = useFeet();
    // const bg2 = useFeet();
    // const bg3 = useFeet();
    // const bg4 = useFeet();
    // const bg5 = useFeet();

    // const ac1 = useFeet2();
    // const ac2 = useFeet2();
    // const ac3 = useFeet2();
    // const ac4 = useFeet2();
    // const ac5 = useFeet2();

    // const sl1 = useFeet3();
    // const sl2 = useFeet3();
    // const sl3 = useFeet3();
    // const sl4 = useFeet3();
    // const sl5 = useFeet3();

    // const ol1 = useFeet4();
    // const ol2 = useFeet4();
    // const ol3 = useFeet4();
    // const ol4 = useFeet4();
    // //const ol5 = useFeet4();


    return (
        <footer className='site-footer'>
            <Container>
                <Row className='row '>
                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        <h5 >Buying Guides</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/guidedirectory/0'>Guitar Body</Link>
                            </li>
                            <li>
                                <Link to='/guidedirectory/1'>Guitar Neck</Link>
                            </li>
                            <li>
                                <Link to='/guidedirectory/3'>Guitar Bridge</Link>
                            </li>
                            <li>
                                <Link to='/guidedirectory/2'>Guitar Strings</Link>
                            </li>
                            <li>
                                <Link to='/guidedirectory/4'>Guitar Pickups</Link>
                            </li>
                        </ul>
                    </Col>

                    <Col xs='6' sm='3' className='text-center'>
                        <h5 >Author Contact</h5>
                        <ul className='list-unstyled'>
                            <li >
                                <a href="https://www.linkedin.com/in/paul-adam-86ba423b/" target="_blank" rel="noreferrer">Author LI</a>
                            </li>
                            <li>
                                <a href='https://www.youtube.com/channel/UCdSa6weDVHCPFJzjE9M4foA' target="_blank" rel="noreferrer">Author's YouTube</a>
                            </li>
                            <li>
                                <a
                                    role='button'
                                    href='mailto:paulgadam@gmail.com'
                                >
                                    <i className='' /> Author Email
                                </a>
                            </li>
                            <li>
                                <Link to='/contact'>Contact Page</Link>
                            </li>
                        </ul>

                    </Col>

                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        <h5 >Site Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/'>Site Home</Link>
                            </li>
                            <li>
                                <Link to='/guidesiteref'>References</Link>
                            </li>
                            <li>
                                <Link to='/guidesitemap'>Site Map</Link>
                            </li>
                            <li>
                                <Link to='/guideaboutpage'>About Page</Link>
                            </li>
                            <li>
                                <Link to='/about'>Author About</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        <h5 >Outside Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <a href="https://www.jemsite.com/" target="_blank" rel="noreferrer">Jemsite</a>
                            </li>
                            <li>
                                <a href="https://www.nucamp.co/" target="_blank" rel="noreferrer">NuCamp</a>
                            </li>
                            <li>
                                <a href="https://www.ibanez.com/usa/" target="_blank" rel="noreferrer">Ibanez</a>
                            </li>
                            <li>
                                <a href="https://www.dimarzio.com/" target="_blank" rel="noreferrer">Dimarzio Pickups</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};


export default Footer;