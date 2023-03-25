

const GuitarStat3 = ({ guitarstat3 }) => {
    const {videoId, text, videoId2, text2 } = guitarstat3;
    return (
        <>
            <ul className='list-unstyled' style={{ padding: '2px', fontFamily: 'papyrus', color: 'slateblue' }}>
                <li>
                    <a href={videoId} target="_blank" rel="noreferrer">{text}</a>
                </li>
                <li>
                    <a href={videoId2} target="_blank" rel="noreferrer">{text2}</a>
                </li>
            </ul>
        </>
    );
};


export default GuitarStat3;