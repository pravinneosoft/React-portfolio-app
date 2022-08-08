import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Particls from '../../utils/Particls';
import '../home/style.scss'
import { Link } from "react-router-dom";
// import Fade from 'react-reveal/Fade';


export default function Home() {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings:["HTML Developer","JS Developer","ReactJs Developer","Bootstrap5"],
      stringsElement: null,
      // typing speed
      typeSpeed: 90,
      // time before typing starts
      // startDelay: 1000,
      // backspacing speed
      backSpeed: 120,
      // time before backspacing
      // backDelay: 200,
      // loop
      loop: true,
    
      // show cursor
      showCursor: false,
      // character for cursor
      // cursorChar: "|",
      // attribute to type (null == text)
      attr: null,
      // either html or text
      // contentType: 'html',
      // call when done callback function
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (<>
    <Particls />
  
    <div className="title">
      <h1 className="heading">Hello , I ' Am Pravin</h1>

    <p className="herobanner__paragraph">And I'm a 
    &nbsp;
     <span className="herobanner__paragraph-span"ref={el}></span>
    </p> 
  

      <Link to={require("../../cv/p.pdf")}target="blank" className="btn btn--learn" id="link">Download CV</Link>
 </div>  
 </>
  );
}