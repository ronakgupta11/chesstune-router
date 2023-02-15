import intro from "../assets/intro.mp4"
import { useEffect, useRef } from 'react';
export default function Index() {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
    return (
      <div className="home-page">
      <div className="home-upper">

      <div className="page-text">

      <p className="page-head">
        Tune Up Your<br/>Chess Skills<br/>With Us
      </p>
      <p className="page-quote">
      Play the opening like a book, the middlegame like a<br/>magician, and the endgame like a machine.”<br/>-Rudolph Spielmann
      </p>
      </div>
      <div className="intro-video">
        <video  ref={videoRef} autoPlay controls>
          <source src={intro} type="video/mp4"/>
        </video>
      </div>
      </div>
      <div className="home-lower">

      </div>

      </div>
    );
  }
  