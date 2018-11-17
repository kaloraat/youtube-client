import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
    // console.log(video);
    const imageURL = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="media video-list-item">
                <img
                    className="align-self-start mr-3"
                    src={imageURL}
                    alt={video.snippet.title}
                />
                <div className="media-body">
                    <div className="media-heading">
                        <p>{video.snippet.title}</p>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;
