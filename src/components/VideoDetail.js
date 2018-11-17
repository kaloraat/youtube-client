import React from "react";

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>;
    }
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div>
            <div className="embed-responsive embed-responsive-16by9 mb-2">
                <iframe
                    className="embed-responsive-item"
                    title={video.snippet.title}
                    src={url}
                    allowFullScreen
                />
            </div>

            <div>
                <h2>{video.snippet.title}</h2>
            </div>
            <div>{video.snippet.description}</div>
            <hr />
        </div>
    );
};

export default VideoDetail;
