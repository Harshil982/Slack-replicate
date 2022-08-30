import React,{useEffect,useRef} from 'react'

const CommonVideoPlayer = (props) => {
    const videoEl = useRef(null);

    const attemptPlay = () => {
      videoEl &&
        videoEl.current &&
        videoEl.current.play().catch(error => {
          console.error("Error attempting to play", error);
        });
    };
  
    useEffect(() => {
      attemptPlay();
    }, []);
  return (
    <video
    style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
    playsInline
    loop
    muted
    alt="All the devices"
    src={props.source}
    ref={videoEl}
  />
  )
}

export default CommonVideoPlayer