//import { Col } from "reactstrap";


const ErrorMessage = ({ errorMsg }) => {
    return (
        <>
        <h1 className="error-head">Aaaaahhhhhh...you broke it!!!!</h1>
            <h4 className="error-style">{errorMsg}</h4>
        </>
    );
};


export default ErrorMessage;