import React, { useRef, useState, useEffect } from 'react';
import Player from '@vimeo/player';
import Spinner from './Spinner';

const VideoLoop = ({
    title,
    id,
    width = 16,
    height,
    className,
    ...rest
}) => {
    // if (!id) return null;

    const videoRef = useRef();
    const [iframePlayer, setIframePlayer] = useState(null);
    const [loading, setLoading] = useState(true); // State to manage loading spinner

    useEffect(() => {
        if (videoRef.current && iframePlayer === null) {
            const player = new Player(videoRef.current);
            setIframePlayer(player);

            player.on('loaded', () => {
                setLoading(false); // Hide loading spinner when video is loaded
            });
        }
    }, [videoRef.current]);

    useEffect(() => {
        if (iframePlayer) {
            iframePlayer.play().catch(() => { });
        }
    }, [iframePlayer]);

    return (
        <div {...rest}>
            {loading && <Spinner />}
            <iframe
                ref={videoRef}
                title={title}
                src={`https://player.vimeo.com/video/${id}?background=1&autoplay=1&autopause=0&loop=1`}
                allow="autoplay; fullscreen"
                allowFullScreen
                style={{
                    display: loading ? 'none' : 'block',
                    height: height,
                    width: '100%',
                }}
            ></iframe>
        </div>
    );
};

export default VideoLoop;
