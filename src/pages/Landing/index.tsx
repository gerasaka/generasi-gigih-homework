import { handleAuth } from "../../services/spotify/auth";
import Footer from "../../components/layout/Footer";
import style from "./style.module.css";
import { Button } from "@chakra-ui/button";
import { FaSpotify } from "react-icons/fa"

export default function Landing() {
  return (
    <div className={style.container}>
      <div className={style.main}>
        <div className={style.callAction}>
          <h1 className={style.greeting}>Welcome Fellas!</h1>
          <p className={style.desc}>There are a lot of people who have memories through their playlists</p>
          <Button
            size="lg"
            fontFamily="Roboto"
            fontSize="20px"
            leftIcon={<FaSpotify />}
            borderRadius="50px"
            color="white"
            backgroundColor="#1DB954"
            onClick={() => (window.location.href = handleAuth())}
          >
            Get Yours!
          </Button>
        </div>
        <img className={style.imageBg} src="./spot2.png" alt="" />
        <img className={style.imageDeco} src="./deco.png" alt="" />
      </div>
      <Footer />
    </div>
  );
}
