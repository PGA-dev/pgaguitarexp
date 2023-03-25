import { Col } from 'reactstrap';
import GuitarStat3 from './GuitarStat3';
import { selectStatByGuitarId3 } from './guitarStatSlice3';
import ErrorMessage from '../../sitemisc/ErrorMessage';
import LoadingMessage from '../../sitemisc/LoadingMessage';
import { useSelector } from "react-redux";

const GuitarStatList3 = ({ guitarid }) => {
    const guitarstats3 = useSelector(selectStatByGuitarId3(guitarid));
    const isLoading = useSelector((state) => state.guitarstat3.isLoading);
    const errorMsg = useSelector((state) => state.guitarstat3.errorMsg);

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

    if (guitarstats3 && guitarstats3.length > 0) {
        return (
            <Col md='12' className='m-1'>
                <h4>YouTube Guides</h4>
                {guitarstats3.map((guitarstat3) => {
                    return <GuitarStat3 key={guitarstat3.id} guitarstat3={guitarstat3} />;
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



export default GuitarStatList3;