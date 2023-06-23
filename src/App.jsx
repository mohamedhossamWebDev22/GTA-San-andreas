import React from "react";

import { Link, NavLink } from "react-router-dom";

import poster from "./assets/poster.png";
import logo1 from "./assets/socialIcon2.png";
import logo2 from "./assets/socialIcon.png";

const App = () => {
  return (
    <>
      <div dir="ltr" className="bdy">
        <div className="navBar-Fixed">
          <h1>Grand Theft Auto</h1>
          <p>San Andreas</p>

          <img className="poster" src={poster} alt="Game Poster" />

          <div className="links">
            <Link to={"hi"}>Link</Link>
            <br />
            <Link to={"hi"}>Link</Link>
            <br />
            <Link to={"hi"}>Link</Link>
          </div>

          <br />

          <div className="social">
            <Link target="_blank" to={"https://www.facebook.com/"}>
              <img
                src={logo1}
                width={"48px"}
                height={"48px"}
                alt="facebook logo"
              />
            </Link>
            <br />
            <Link
              target="_blank"
              to={"https://github.com/mohamedhossamWebDev22"}
            >
              <img
                src={logo2}
                width={"48px"}
                height={"48px"}
                alt="github logo"
              />
            </Link>
          </div>
        </div>
        <div className="navBar">
          <h1>Grand Theft Auto</h1>
          <p>San Andreas</p>

          <img className="poster" src={poster} alt="Game Poster" />

          <div className="links">
            <Link to={"hi"}>Link</Link>
            <br />
            <Link to={"hi"}>Link</Link>
            <br />
            <Link to={"hi"}>Link</Link>
          </div>

          <br />

          <div className="social">
            <Link target="_blank" to={"https://www.facebook.com/"}>
              <img
                src={logo1}
                width={"48px"}
                height={"48px"}
                alt="facebook logo"
              />
            </Link>
            <br />
            <Link target="_blank" to={"https://github.com/"}>
              <img
                src={logo2}
                width={"48px"}
                height={"48px"}
                alt="github logo"
              />
            </Link>
          </div>
        </div>
        <div className="badi">
          <h1>
            لعبة جاتا سان اندرياس تتضمن العديد من المهام والأنشطة المثيرة، بما
            في ذلك حرب العصابات وقيادة السيارات. يمكن للاعب أن يقوم بتشكيل عصابة
            خاصة به والقيام بمهام مختلفة لزيادة نفوذه في المدينة، كما يمكنه
            أيضًا سرقة السيارات والدراجات النارية، والقيام بسباقات مختلفة . يمكن
            للاعب أن يستخدم الأسلحة المختلفة والطائرات والهليكوبتر، كما يمكنه
            التجول في المدينة والقيام بأنشطة مختلفة.
          </h1>

          <div className="showMore">
            <a href="#1">See More..</a>
          </div>

          <div className="trailer">
            <h3>Trailer</h3>
            <iframe
              id="1"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/yOzcbtsw_pQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
