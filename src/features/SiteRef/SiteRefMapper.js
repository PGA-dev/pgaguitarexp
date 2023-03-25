import { Col } from 'reactstrap';
import { selectAllSiteRef } from './siteRefSlice';
import SiteRefCard from './SiteRefCard';
import ErrorMessage from '../../sitemisc/ErrorMessage';
import LoadingMessage from '../../sitemisc/LoadingMessage';
import { useSelector } from 'react-redux';

//Guitar Directory pull
const SiteRefMapper = () => {
    const siteref = useSelector(selectAllSiteRef);
    console.log('siteref:', siteref);
    const isLoading = useSelector((state) => state.siteref.isLoading);
    const errorMsg = useSelector((state) => state.siteref.errorMsg);

    return isLoading ? (
        <>
            <LoadingMessage />
        </>
    ) : errorMsg ? (
        <>
            <ErrorMessage errorMsg={errorMsg} />
        </>
    ) : (
        <>
            {siteref.map((siteref) => {
                return (
                    <Col md="12" key={siteref.id}>
                        <SiteRefCard siteref={siteref} />
                    </Col>
                );
            })}
        </>
    );
};


export default SiteRefMapper;
