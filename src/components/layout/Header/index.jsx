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

      <div className={style.avatarContainer}>
        <div className={style.avatarDesc}>
        <p className={style.avatarName}>Your Name</p>
        <Avatar size="sm" name="Oshigaki Kisame" src="https://bit.ly/dan-abramov" />
        </div>
      </div>
    </header>
  );
};

export default Header;
