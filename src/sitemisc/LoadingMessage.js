
const LoadingMessage = () => {
    return (
        <>
            <i  style={spinStyle} className='fa fa-cog fa-spin fa-3x fa-fw spin-style' />
            <p  className='load-style'>Please Wait Loading...</p>
        </>
    );
};


const spinStyle= {
    color: "magenta"
};

export default LoadingMessage;