import {  Card, CardHeader, CardBody } from "reactstrap";


//style={{ padding: '2px', fontFamily: 'papyrus', color: '#49fb35' }}
const GuitarStat = ({ guitarstat }) => {
    const { head, text } = guitarstat;
    return (
        <Card>
            <CardHeader color="magenta" style={{fontSize: '45px'}}>{head}</CardHeader>
            <CardBody><p>{text}</p></CardBody>
        </Card>
    );
};


export default GuitarStat;