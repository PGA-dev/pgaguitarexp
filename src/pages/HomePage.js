import { Container } from 'reactstrap';
import SubHeader from '../site/SubHeader';
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