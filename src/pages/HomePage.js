import { Container } from 'reactstrap';
//import FrontEndDisplay from '../features/FrontDisplay/FrontEndDisplay';
import SubHeader from '../site/SubHeader';
//import FrontEndDisplayCarousel from '../features/FrontDisplay/FrontEndDisplayUC'
import FrontDisplayCarousel from '../features/FrontDisplay/FrontEndDisplayCarousel';


const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home' />
            <FrontDisplayCarousel />
        </Container>
    );
};

export default HomePage;