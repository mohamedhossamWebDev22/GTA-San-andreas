import React from "react";

import { Link, NavLink } from "react-router-dom";

import { Gallery } from "react-grid-gallery";

import poster from "./assets/poster.png";
import logo1 from "./assets/socialIcon2.png";
import logo2 from "./assets/socialIcon.png";

import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";
import img6 from "./assets/img6.png";

const images = [
  {
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.WAoihZoj0oMq5DdqLap2CwHaEK%26pid%3DApi&f=1&ipt=d50520a89e3e1a3c86ab21505c6373d0e76b53b8ef9a3514785356e42c11ac75&ipo=images",
    width: 320,
    height: 174,
    isSelected: false,
  },
  {
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.VjL4iUZnOi2Zh7OMCRxIwgHaGS%26pid%3DApi&f=1&ipt=bfadd707cf12a5bf824264a971261510589fb21601b75df70c907b7476c2dda2&ipo=images",
    width: 320,
    height: 212,
    alt: "Boats (Jeshu John - designerspics.com)",
  },

  {
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ptrGnfrUzrh8Njl13aMc1QHaEo%26pid%3DApi&f=1&ipt=8ae01c21e06aabdbcf2970c0e55be38233199f00276fca1f48d2139f341ad7ad&ipo=images",
    width: 320,
    height: 212,
  },
];

const images2 = [
  {
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qeRzSyT35yAIALEm_w6FoAHaEK%26pid%3DApi&f=1&ipt=9a04a15944a505b018551b531fa7236638d4a120ac9b3fc5a11eb2e0c4c90dc8&ipo=images",
    width: 320,
    height: 174,
    isSelected: false,
  },
  {
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.XuUCywRia2hCFL04Z_qGmwHaEo%26pid%3DApi&f=1&ipt=c04bb1c8652cd1ef079b5b7a9628545416a0ce7fc6ecd42c4bd3fdb3af8f10d5&ipo=images",
    width: 320,
    height: 212,
    alt: "Boats (Jeshu John - designerspics.com)",
  },

  {
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Tp1w1hwBECF--ibsoQghEQAAAA%26pid%3DApi&f=1&ipt=cc5096ba260bc4adb1ab5ed1a8cd8ba90e472b8823ddfec5db12fc10edbca650&ipo=images",
    width: 320,
    height: 212,
  },
];

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
            <Link target="_blank" to={"https://www.facebook.com/profile.php?id=100054732847946"}>
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
          <Gallery className="gallery" images={images} />
          <Gallery className="gallery" images={images2} />

          <div className="footer">
            <footer>
              <h1>Made By: محمد حسام</h1>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
