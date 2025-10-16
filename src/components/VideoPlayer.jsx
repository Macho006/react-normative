// src/components/VideoPlayer.jsx
import { Pause, Play, RotateCcw } from "lucide-react";
import React, { useRef } from "react";

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  const handleRestart = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <video ref={videoRef} className="h-[500px] rounded-2xl " controls={false} src="https://assets.mixkit.co/videos/2213/2213-720.mp4">
      </video>

      <div style={{ marginTop: "20px" }}>
        <button onClick={handlePlay}><Play /></button>
        <button onClick={handlePause} style={{ margin: "0 10px" }}>
          <Pause />
        </button>
        <button onClick={handleRestart}><RotateCcw /></button>
      </div>
    </div>
  );
};

export default VideoPlayer;
