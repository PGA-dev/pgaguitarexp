import { Col, Row } from 'reactstrap';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const Header = () => {

    const [toggle, setToggle] = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(0,0)',
        config: { duration: 1500 }
    });

    useEffect(() => {
        setToggle(true);
    }, []);

    return (

        <Row className='text-center site-header'>
            <Col >
                <h1 m='12' id='title' className='headstyle' >Players Index: A Modern Buyers Guide for Guitar Gear</h1>
                <animated.div style={animatedStyle}>
                    <h3 className='text-center'><i>A Guitar Player's Best Friend</i></h3>
                </animated.div>
            </Col>
        </Row>

    );
};


export default Header;