import React, {useEffect} from "react"

const Home = props => {
  const ACCESS_KEY = "0STJ8FlCNZ1b5W14LcNyiWv99l7tnkfw2vDj_2RqyNE"
  const QUERY = "query=ocean"
  const {image, getImg, steve} = props;

    useEffect(() => {
        getImg(ACCESS_KEY, QUERY)
        });

  return (
    <div className="home-text">
      <section className="top-content">
      <img src={steve} alt=" scuba steve from big daddy movie" />
      <div className="speech-bubble"><h2 className="bubble-text">Hi, I'm Scuba Steve!</h2></div>
      
      
      </section>
      <section className="landing-content">
      <h2>
         And this is my Scuba Steve's Scuba Store Emporium!
      Enjoy your visit! And remember, save some for the <span>🐠🐠🐠🐡🐡🐡</span> <span>🔱</span></h2>
      <img src={image} alt="random ocean scene from Unsplash" className="api-img" />
      </section>
      <div className="separator"></div>
    </div>
  )
  }

  export default Home