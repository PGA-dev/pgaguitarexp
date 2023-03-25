import { Col } from 'reactstrap';
import { selectAllLinks } from './linkSlice';
import LinksCard from './LinksCard';
import ErrorMessage from '../../sitemisc/ErrorMessage';
import LoadingMessage from '../../sitemisc/LoadingMessage';
import { useSelector } from 'react-redux';

//Guitar Directory pull
const LinksMapper = () => {
    const links = useSelector(selectAllLinks);
    console.log('links:', links);
    const isLoading = useSelector((state) => state.links.isLoading);
    const errorMsg = useSelector((state) => state.links.errorMsg);

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
            {links.map((links) => {
                return (
                    <Col md="6" key={links.id}>
                        <LinksCard links={links} />
                    </Col>
                );
            })}
        </>
    );
};


export default LinksMapper;
