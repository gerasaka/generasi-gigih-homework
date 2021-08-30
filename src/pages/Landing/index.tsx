import { authUser } from "../../services/spotify/auth";
import Footer from "../../components/layout/Footer";
// assets
import style from "./style.module.css";
import { desktopBackground } from "../../assets";
// third-party
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
            variant="outline"
            size="lg"
            fontSize="20px"
            leftIcon={<FaSpotify />}
            borderRadius="50px"
            color="#1DB954"
            borderColor="#1DB954"
            _hover={{
              background: "#1DB954",
              color: "white",
            }}
            onClick={() => (window.location.href = authUser())}
          >
            Get Yours!
          </Button>
        </div>
        <img className={style.imageBg} src={desktopBackground} alt="" />
      </div>
      <Footer />
    </div>
  );
}
