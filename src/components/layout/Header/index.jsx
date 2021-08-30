import style from "./style.module.css";
import { Link } from "react-router-dom";
import {
  Avatar,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";

import { useSelector, useDispatch } from "react-redux";

import { getCurrentUser } from "../../../services/spotify/getData";
import { storeUser } from "../../../redux/authSlice";

import { useEffect } from "react";

const Header = () => {
  const { userProfile, accessToken } = useSelector((state) => state.auth);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentUser(accessToken).then((data) => dispatch(storeUser(data)));
  }, [dispatch, accessToken]);

  return (
    <header>
      <div className={style.logo}>Flowso</div>

      <nav>
        <ul>
          <li>
            <Link className={style.navItem} to="/create-playlist">
              Create Playlist
            </Link>
          </li>
          <li>
            <Link className={style.navItem} to="/your-playlist">
              Your Playlist
            </Link>
          </li>
        </ul>
      </nav>
      <>
      </>
      <div className={style.avatarContainer}>
        <Button className={style.avatarDesc} onClick={onOpen} colorScheme="purple">
          <p className={style.avatarName}>{userProfile.display_name}</p>
          {userProfile.images && (
          <Avatar
            size="sm"
            name={userProfile.display_name}
            // src="https://i.scdn.co/image/ab6775700000ee850df99207e231104e24770f49"
            src={userProfile.images[0].url}
          />
          )}
        </Button>
      </div>

      <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInRight">
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>LOLOLOLOLO</ModalHeader> */}
          <ModalCloseButton color="red" />
          <ModalBody>
            <Avatar
              size="lg"
              name={userProfile.display_name}
              src="https://i.scdn.co/image/ab6775700000ee850df99207e231104e24770f49"
            />
            <p>{userProfile.display_name}</p>
            <p>tekotek kotek kotek tekotek</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Log Out
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </header>
  );
};

export default Header;
