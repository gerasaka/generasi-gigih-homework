import style from "./style.module.css";
import { Link } from "react-router-dom"
import { Avatar } from "@chakra-ui/react";

const Header = () => {
  return (
    <header>
      <div className={style.logo}>Flowso</div>

      <nav>
        <ul>
          <li>
            <Link className={style.navItem} to="/create-playlist">Create Playlist</Link>
          </li>
          <li>
            <Link className={style.navItem} to="/your-playlist">Your Playlist</Link>
          </li>
        </ul>
      </nav>

      <div className={style.avatar}>
        <p>Your Name</p>
        <Avatar name="Oshigaki Kisame" src="https://bit.ly/dan-abramov" />
      </div>
    </header>
  );
};

export default Header;
