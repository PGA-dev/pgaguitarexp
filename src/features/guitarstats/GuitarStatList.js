import { Col } from 'reactstrap';
import GuitarStat from './GuitarStat';
import { selectStatByGuitarId } from './guitarStatSlice';
import ErrorMessage from '../../sitemisc/ErrorMessage';
import LoadingMessage from '../../sitemisc/LoadingMessage';
import { useSelector } from "react-redux";

const GuitarStatList = ({ guitarid }) => {
    const guitarstats = useSelector(selectStatByGuitarId(guitarid));
    const isLoading = useSelector((state) => state.guitarstat.isLoading);
    const errorMsg = useSelector((state) => state.guitarstat.errorMsg);

    if (isLoading) {
        return (
            <LoadingMessage />
        );
    }

    if (errorMsg) {
        return (
            <ErrorMessage errorMsg={errorMsg} />
        );
    }

    if (guitarstats && guitarstats.length > 0) {
        return (
            <Col md='12' className='m-1 p-2'>
                <h4>Introduction</h4>
                {guitarstats.map((guitarstat) => {
                    return <GuitarStat key={guitarstat.id} guitarstat={guitarstat} />;
                })}
            </Col>
        );
    }
    return (
        <Col>
            {console.log('No stats on this item yet')}
            <br></br>
            <br></br>
        </Col>
    );
};


export default GuitarStatList;