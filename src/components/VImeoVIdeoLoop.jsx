import { useState, useEffect } from 'react';
import ReactPlayer from "react-player";

const VideoLoop = ({ id, ...rest }) => {
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        if (!isShow) {
            setIsShow(true)
        }
    }, [])

    return (
        <div {...rest} className='mwa '>
            {
                isShow ? (
                    <ReactPlayer
                        url={`https://player.vimeo.com/video/${id}?background=1&autoplay=1&autopause=0&loop=1`}
                        loop
                        playing={true}
                        muted
                        wrapper="section"
                        width="100%"
                        style={{
                            maxWidth: "100%"
                        }}
                    />
                )
                    : <p>Loading...</p>
            }

        </div>
    );
};

export default VideoLoop;
