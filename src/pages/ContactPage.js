import { Container, Col, Row } from 'reactstrap';
import SubHeader from '../site/SubHeader';
import ContactForm from '../features/Contact/ContactForm';
import I8527Img from '../app/assets/img/p_region_RG8527Z_SDE_00_03.png';

const ContactPage = () => {
    return (
        <Container>
            <SubHeader current='Buying Guide Contact' />
            <Row className='row'>
                <Col md='6'>
                    <div md='1' className='text-center'>
                        <img src={I8527Img} alt='Ibanez logo' className='rounded img-fluid' />
                    </div>
                </Col>
                <Col md='6'>
                    <ContactForm />
                </Col>
            </Row>
            <Row className='align-items-center'>
                <Col sm='12'>
                </Col>
                <Col>

                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;