import { Container, Col, Row, Button } from 'reactstrap';
import SubHeader from '../site/SubHeader';
import IPIAImg from '../app/assets/img/p_region_PIA3761C_BLP_00_02.png';
import SiteRefMapper from '../features/SiteRef/SiteRefMapper';

const GuideSiteReferences = () => {
    return (
        <Container>
            <SubHeader current='Guide Site References' />
            <Row className='row'>
                <Col md='12'>
                    <div md='1' className='text-center'>
                        <img src={IPIAImg} alt='Ibanez RGA622' className='rounded img-fluid' />
                    </div>
                </Col>
            </Row>
            <Row>
                <SiteRefMapper />
            </Row>
        </Container>
    );
};

export default GuideSiteReferences;