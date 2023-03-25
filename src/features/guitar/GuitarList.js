import { useSelector } from "react-redux";
import { Row, Col } from 'reactstrap';
import GuitarCard from "./GuitarCard";
import { selectAllGuitar } from './guitarSlice';
import ErrorMessage from '../../sitemisc/ErrorMessage';
import LoadingMessage from '../../sitemisc/LoadingMessage';

//Guitar Directory pull
const GuitarList = () => {
    const guitar = useSelector(selectAllGuitar);
    console.log('guitar:', guitar);
    const isLoading = useSelector((state) => state.guitar.isLoading);
    const errorMsg = useSelector((state) => state.guitar.errorMsg);

    return isLoading ? (
        <>
            <LoadingMessage />
        </>
    ) : errorMsg ? (
        <>
            <ErrorMessage errorMsg={errorMsg} />
        </>
    ) : (
        <Row className='ms-auto'>
            {guitar.map((guitar) => {
                return (
                    <Col md='12' className='m-4' key={guitar.id}>
                        <GuitarCard guitar={guitar} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default GuitarList;
