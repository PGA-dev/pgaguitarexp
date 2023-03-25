import { Card, CardBody,  CardHeader, CardSubtitle } from 'reactstrap';


//Used in Site Map
const SiteRefCard = ({ siteref }) => {
    const { id, section, text, url1, url2, url3, url4, url5, url6, url7, url8, url9, url10 } = siteref;

    return (
        <Card className='mb-4 siteref-card'>
            <CardHeader className='siteref-header'>{section}</CardHeader>
            <CardSubtitle  style={siterefTitle}>{text}</CardSubtitle>
            <CardBody>
                <ul className='list-unstyled' >
                    <li>
                        <a href={url1} target="_blank" rel="noreferrer">{url1}</a>
                    </li>
                    <li>
                        <a href={url2} target="_blank" rel="noreferrer">{url2}</a>
                    </li>
                    <li>
                        <a href={url3} target="_blank" rel="noreferrer">{url3}</a>
                    </li>
                    <li>
                        <a href={url4} target="_blank" rel="noreferrer">{url4}</a>
                    </li>
                    <li>
                        <a href={url5} target="_blank" rel="noreferrer">{url5}</a>
                    </li>
                    <li>
                        <a href={url6} target="_blank" rel="noreferrer">{url6}</a>
                    </li>
                    <li>
                        <a href={url7} target="_blank" rel="noreferrer">{url7}</a>
                    </li>
                    <li>
                        <a href={url8} target="_blank" rel="noreferrer">{url8}</a>
                    </li>
                    <li>
                        <a href={url9} target="_blank" rel="noreferrer">{url9}</a>
                    </li>
                    <li>
                        <a href={url10} target="_blank" rel="noreferrer">{url10}</a>
                    </li>
                </ul>
            </CardBody>
        </Card >
    );
}

const siterefTitle = {
    color:'slateblue',
    padding: '15px',
    margin: '20px',
    fontSize: '27px',
    fontFamily: 'papyrus',
    fontWeight: 900,
    textDecoration: 'none'
};

export default SiteRefCard;