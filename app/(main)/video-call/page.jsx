import React from 'react'
import VideoCall from './VideoCall';

async function VideoCallPage({ searchParams }) {
    const {sessionId, token} = await searchParams;

    return (
        <VideoCall sessionId={sessionId} token={token}/>
    )
}

export default VideoCallPage
