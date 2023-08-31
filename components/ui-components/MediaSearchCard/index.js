const MediaSearchCard = ({ results }) => {
    const getMediaType = (media) => {
        const extension = media.split('.').pop().toLowerCase();
        if (extension === "mp4" || extension === "webm") {
            return "video";
        } else if (extension === "jpg" || extension === "jpeg" || extension === "png" || extension === "gif") {
            return "image";
        } else {
            return "unknown";
        }
    };

    return (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr', gridGap: '16px', alignStart: 'start' }}>
            {results.map((result, index) => (
                <div key={index} >
                    {getMediaType(result.media) === "image" ? (
                        <img src={result.media} alt="result" style={{width: '150px', height: '150px',}} />
                    ) : getMediaType(result.media) === "video" ? (
                        <video controls>
                            <source src={result.media} type={`video/${result.media.split('.').pop().toLowerCase()}`} />
                            Your browser does not support the video tag.
                        </video>
                    ) : null}
                </div>
            ))}
        </div>
    );
};



export default MediaSearchCard;