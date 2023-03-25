import { Card, CardText } from 'reactstrap';
import { linksUrl } from '../../sitemisc/linksUrl';


//Used in Site Map
const LinksCard = ({ links }) => {
    const { id, name, url } = links;

    const cardURL = linksUrl + url;
    return (
        <Card  className=' mb-4 link-card'>
            <CardText><a className='link-anchor' href={cardURL}>{name}</a></CardText>
        </Card>

    );
}


export default LinksCard;