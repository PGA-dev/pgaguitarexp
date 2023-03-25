import { Col, Row, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";


const SubHeader = ({ current, detail }) => {



    const headstyleNav = {
        color: "aqua",
        padding: "25px",
        fontSize: "48px",
        fontFamily: "Papyrus",
        textDecoration: 'none'
    };

    const headstyleHover = {
        color: "slateblue",
        padding: "27px",
        fontSize: "48px",
        fontWeight: 900,
        fontFamily: "Papyrus",
        textDecoration: 'none'
    };

    const headstyleClick = {
        color: "magenta",
        padding: "25px",
        fontSize: "48px",
        fontFamily: "Papyrus",
        textDecoration: 'underline'
    };
    const headstyleCurrent = {
        color: "slateblue",
        padding: "0px 10px",
        textDecoration: 'none'
    };

    const headstyleNobar = {
        border: '0px black'
    };

    const useBreadCrumb = () => {
        const [style, setStyle] = useState(headstyleNav);
        const onMouseEnter = () => setStyle(headstyleHover)
        const onClick = () => setStyle(headstyleClick)
        const onMouseLeave = () => setStyle(headstyleNav)
        return { style, onClick, onMouseEnter, onMouseLeave }
    }
    // homestyle
    const bread1 = useBreadCrumb();
    //firstchild style
    const bread2 = useBreadCrumb();
// will reclaim with .breadcrumb and .breadcrumb-item
    return (
        <Row style={headstyleNav} >
            <Col>
                <Breadcrumb style={headstyleNobar}>
                    <BreadcrumbItem >
                        <Link {...bread1} to='/'>Home</Link>
                    </BreadcrumbItem >
                    {detail && (
                        <BreadcrumbItem >
                            <Link {...bread2} to='/guidedirectory'>Guide Directory</Link>
                        </BreadcrumbItem>
                    )}
                    <BreadcrumbItem style={headstyleCurrent} active>{current}</BreadcrumbItem>
                </Breadcrumb>
                <hr />
            </Col>
        </Row>
    );

};




export default SubHeader;