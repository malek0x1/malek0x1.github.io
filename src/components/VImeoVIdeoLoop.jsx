import { useState, useEffect } from 'react';
import ReactPlayer from "react-player";

const VideoLoop = ({ id, ...rest }) => {
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        setIsShow(true)
    }, [])

    return (
        <div {...rest}>
            {
                isShow && (
                    <ReactPlayer
                        url={`https://player.vimeo.com/video/${id}?background=1&autoplay=1&autopause=0&loop=1`}
                        loop
                        playing={true}
                        muted

                    />
                )
            }

        </div>
    );
};

export default VideoLoop;
