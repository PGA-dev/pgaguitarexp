import { Col } from 'reactstrap';
import GuitarStat2 from './GuitarStat2';
import { selectStatByGuitarId2 } from './guitarStatSlice2';
import ErrorMessage from '../../sitemisc/ErrorMessage';
import LoadingMessage from '../../sitemisc/LoadingMessage';
import { useSelector } from "react-redux";

const GuitarStatList2 = ({ guitarid }) => {
    const guitarstats2 = useSelector(selectStatByGuitarId2(guitarid));
    const isLoading = useSelector((state) => state.guitarstat2.isLoading);
    const errorMsg = useSelector((state) => state.guitarstat2.errorMsg);

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
    if (guitarstats2 && guitarstats2.length > 0) {
        return (
            <Col md='12' className='m-1'>
                {guitarstats2.map((guitarstat2) => {
                    return <GuitarStat2 key={guitarstat2.id} guitarstat2={guitarstat2} />;
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


export default GuitarStatList2;