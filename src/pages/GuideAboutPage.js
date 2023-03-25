import { Container, Col, Row, Card } from 'reactstrap';
import SubHeader from '../site/SubHeader';
import I8527Img from '../app/assets/img/p_region_RG8527Z_SDE_00_03.png';

const GuitarBodyPage = () => {
    return (
        <Container>
            <SubHeader current='About Guide' />
            <Row className='row'>
                <Col md='12'>
                    <div md='1' className='text-center'>
                        <img src={I8527Img} alt='Ibanez logo' className='rounded img-fluid' />
                    </div>
                </Col>
                <Col md='12'>
                    <Card className='p-4'>
                        <p>
                        One of the most interesting questions I get asked as a guitar instructor is: "what paramaters are relevant to buying a guitar?" The answer, like most issues in life, varies with the needs of the student, or musician asking the question. While most beginner players don't really need a lot of information to get them started, potentially realizing that too much overkill on specifics might end up killing their "enjoyable" new hobby, they do often need solid technical data to inform them and educate them to make future musical decisions and purchases. Advanced, or pro-level players, often need a great deal more information on each instrument, and a way of comparing relevant brands and models for their particular musical needs. For these reasons I have decided to attempt a guide site to all guitar related buying.
                        </p>
                        <p>This guitar guide approaches guitar buying from both a holistic, and a component based, way of thinking.</p>
                    </Card>
                </Col>
                
            </Row>
            <Row className='align-items-center'>
                <Col sm='12'>
                    <br>
                    </br>
                </Col>
            </Row>
        </Container>
    );
};

export default GuitarBodyPage;