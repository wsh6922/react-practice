import { useEffect, useRef, useState } from "react";

const VideoPlayer = () => {
  const ref = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState("");
  const src =
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

  useEffect(() => {
    if (isPlaying) {
      console.log("video.play() 호출");
      ref.current.play();
    } else {
      console.log("video.pause() 호출");
      ref.current.pause();
    }
  }, [isPlaying]);

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "일시정지" : "재생"}
      </button>
      <video width={500} ref={ref} src={src} loop playsInline />;
    </>
  );
};
export default VideoPlayer;
