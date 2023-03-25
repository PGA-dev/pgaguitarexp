import { useState, useEffect } from 'react';
//import {Col} from 'reactstrap';
import {
    Navbar,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';


const NavHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [toggle, setToggle] = useState(false);


    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(0,0)',
        config: { duration: 1500 }
    });

    const animatedStyle2 = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(0,1)',
        config: { duration: 1500 }
    });

    useEffect(() => {
        setToggle(true);
    }, []);

    //(css alternative) stylesheet
    const navHead1 = {
        color: "magenta",
        fontFamily: "papyrus",
        fontWeight: "500"
    };

    const navHead1Hover = {
        color: "magenta",
        fontFamily: "papyrus",
        fontWeight: "900"
    };

    const navHead1Click = {
        color: "aqua",
        fontFamily: "papyrus",
        fontWeight: "900"
    };


    const caret = {
        color: "aqua",
        fontFamily: "papyrus",
    };

    const caretClick = {
        color: "magenta",
        fontFamily: "papyrus",
        fontWeight: 900
    };

    const navList1 = {
        color: "magenta",
        padding: "15px",
        margin: "5px 40px",
        fontSize: "25px",
        fontFamily: "papyrus"
    };

    const navList1Hover = {
        color: "magenta",
        padding: "16px",
        margin: "5px 40px",
        fontSize: "27px",
        fontFamily: "papyrus",
        fontWeight: 700
    };


    const navList2 = {
        color: "aqua",
        padding: "15px",
        margin: "5px 40px",
        fontSize: "25px",
        fontFamily: "papyrus"
    };

    const navList2Hover = {
        color: "aqua",
        padding: "16px",
        margin: "5px 40px",
        fontSize: "27px",
        fontFamily: "papyrus",
        fontWeight: 700
    };

    const navListClick = {
        color: "slateblue",
        padding: "15px",
        margin: "5px 40px",
        fontSize: "26px",
        fontFamily: "papyrus",
        fontWeight: 900
    };

    const navborder = {
        color: "aqua",
        border: "aqua ridge 5px",
        fontFamily: "papyrus"
    };

    const navy = {
        color: "slateblue",
    };

    const navy2 = {
        color: "aqua",
    };

    const navy3 = {
        color: "magenta",
    };

    const useNav = () => {
        const [style, setStyle] = useState(navHead1);
        const onMouseEnter = () => setStyle(navHead1Hover)
        const onClick = () => setStyle(navHead1Click)
        const onMouseLeave = () => setStyle(navHead1)
        return { style, onClick, onMouseEnter, onMouseLeave }
    }

    const useNavlist1 = () => {
        const [style, setStyle] = useState(navList1);
        const onMouseEnter = () => setStyle(navList1Hover)
        const onClick = () => setStyle(navListClick)
        const onMouseLeave = () => setStyle(navList1)
        return { style, onClick, onMouseEnter, onMouseLeave }
    }

    const useNavlist2 = () => {
        const [style, setStyle] = useState(navList2);
        const onMouseEnter = () => setStyle(navList2Hover)
        const onClick = () => setStyle(navListClick)
        const onMouseLeave = () => setStyle(navList2)
        return { style, onClick, onMouseEnter, onMouseLeave }
    }

    const useCaret = () => {
        const [style, setStyle] = useState(caret);
        const onClick = () => setStyle(caretClick)
        const onMouseLeave = () => setStyle(caret)
        return { style, onClick, onMouseLeave }
    }

    const unH = useNav();
    const unGD = useNav();
    const unAG = useNav();
    const unYG = useNav();
    const unC = useNav();
    const unS = useNav();

    const caGD = useCaret();
    const caS = useCaret();

    const unlOne1 = useNavlist1();
    const unlOne2 = useNavlist2();
    const unlOne3 = useNavlist1();
    const unlOne4 = useNavlist2();
    const unlOne5 = useNavlist1();
    const unlOne10 = useNavlist2();

    const unlTwo1 = useNavlist2();
    const unlTwo2 = useNavlist1();
    //end styles
    return (
        <Navbar id='navhead' dark color='primary' sticky='top' expand='lg'>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='me-auto' navbar>
                    <animated.div style={animatedStyle2}>
                        <NavItem>
                            <NavLink className='nav-link' to='/' >
                                <i style={navy} className='fa fa-h-square fa-lg' /><span {...unH}>Home</span>
                            </NavLink>
                        </NavItem>
                    </animated.div>
                    <animated.div style={animatedStyle}>
                        <UncontrolledDropdown nav inNavbar >
                            <DropdownToggle nav caret {...caGD}>
                                <div style={navy2} className='fa fa-cogs fa-sm '><span {...unGD} >Guide Directory</span></div>
                            </DropdownToggle>
                            <DropdownMenu style={{backgroundColor: '#111115'}}>
                                <DropdownItem {...unlOne1} href='/guidedirectory/0'>Guitar Body</DropdownItem>
                                <DropdownItem {...unlOne2} href='/guidedirectory/1'>Guitar Neck</DropdownItem>
                                <DropdownItem {...unlOne3} href='/guidedirectory/2'>Guitar Brands</DropdownItem>
                                <DropdownItem {...unlOne4} href='/guidedirectory/3'>Guitar Bridges</DropdownItem>
                                <DropdownItem {...unlOne5} href='/guidedirectory/4'>Guitar Pickups</DropdownItem>
                                <DropdownItem style={navborder} divider />
                                <DropdownItem {...unlOne10} href='/guidedirectory'>Guide Directory</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </animated.div>
                    <animated.div style={animatedStyle2}>
                        <NavItem>
                            <NavLink className='nav-link' to='/guideaboutpage' style={navy3}>
                                <i style={navy} className='fa fa-gear fa-sm' /> <span {...unAG}>About the Guide</span>
                            </NavLink>
                        </NavItem>
                    </animated.div>
                    <animated.div style={animatedStyle}>
                        <NavItem>
                            <NavLink className='nav-link' to='/about' style={navy3}>
                                <i style={navy2} className='fa fa-gg fa-lg' /> <span {...unYG}>Your Guide</span>
                            </NavLink>
                        </NavItem>
                    </animated.div>
                    <animated.div style={animatedStyle2}>
                        <NavItem>
                            <NavLink className='nav-link' to='/contact' style={navy3}>
                                <i style={navy} className='fa fa-thumbs-up fa-lg' /> <span {...unC}>Contact</span>
                            </NavLink>
                        </NavItem>
                    </animated.div>
                    <animated.div style={animatedStyle}>
                        <UncontrolledDropdown nav inNavbar >
                            <DropdownToggle nav caret {...caS}>
                                <div style={navy2} className='fa fa-cogs fa-sm '><span {...unS} >Site</span></div>
                            </DropdownToggle>
                            <DropdownMenu style={{backgroundColor: '#111115'}}>
                                <DropdownItem {...unlTwo1} href='/guidesitemap'>Site Map</DropdownItem>
                                <DropdownItem {...unlTwo2} href='/guidesiteref'>Site References</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </animated.div>
                </Nav>
            </Collapse>
        </Navbar>
    );
};


export default NavHeader;