//import { Col } from "reactstrap";

const GuitarStat4 = ({ guitarstat4 }) => {
    const { nameMan, nameMan2, nameMan3, nameMan4, nameMan5, Manufacture1URL, Manufacture2URL, Manufacture3URL, Manufacture4URL, Manufacture5URL } = guitarstat4;
    return (
        <>
            <ul className='list-unstyled' style={{ padding: '2px', fontFamily: 'papyrus', color: 'slateblue' }}>
                <li>
                    <a href={Manufacture1URL} target="_blank" rel="noreferrer">{nameMan}</a>
                </li>
                <li>
                    <a href={Manufacture2URL} target="_blank" rel="noreferrer">{nameMan2}</a>
                </li>
                <li>
                    <a href={Manufacture3URL} target="_blank" rel="noreferrer">{nameMan3}</a>
                </li>
                <li>
                    <a href={Manufacture4URL} target="_blank" rel="noreferrer">{nameMan4}</a>
                </li>
                <li>
                    <a href={Manufacture5URL} target="_blank" rel="noreferrer">{nameMan5}</a>
                </li>
            </ul>
        </>
    );
};

export default GuitarStat4;