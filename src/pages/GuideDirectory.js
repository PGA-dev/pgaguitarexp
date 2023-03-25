import { Container } from 'reactstrap';
import GuitarList from '../features/guitar/GuitarList';
import SubHeader from '../site/SubHeader';

const GuideDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current='GuideDirectory' />
            <GuitarList />
        </Container>
    );
};

export default GuideDirectoryPage;