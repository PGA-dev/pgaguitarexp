import { Card, CardImg, CardText, CardBody, Col, CardTitle } from 'reactstrap';
//import { Link } from 'react-router-dom';
const GuitarDetail = ({ guitar }) => {

    const { image, name } = guitar;

    return (
        <Col md='12' className='m-1'>
            <Card className='card'>
                <CardImg className='card-img' top src={image} alt={name} />
                <CardBody>
                    <CardTitle className='card-title text-center'>
                        {name}
                    </CardTitle>
                </CardBody>
            </Card>
        </Col>
    );
};

export default GuitarDetail;