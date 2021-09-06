import style from "./style.module.css";
import { Link } from "react-router-dom";
// import { IoIosArrowRoundForward } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import {
  Avatar,
  Button,
  Box,
  Text,
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
import { storeUser, logout } from "../../../redux/authSlice";

import { useEffect } from "react";

const Header = () => {
  const { userProfile, accessToken } = useSelector((state) => state.auth);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentUser(accessToken).then((data) => dispatch(storeUser(data)));
  }, [dispatch, accessToken]);

  const logOut = () => {
    dispatch(logout());
  };

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
      <></>
      <div className={style.avatarContainer}>
        <Button
          className={style.avatarDesc}
          onClick={onOpen}
          backgroundColor="rgba(129,140,248)"
          _hover={{
            background: "#1DB954",
          }}
        >
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
          <ModalCloseButton />
          <ModalBody>
            <Box display="flex">
              <Avatar
                size="lg"
                name={userProfile.display_name}
                src="https://i.scdn.co/image/ab6775700000ee850df99207e231104e24770f49"
              />
              <Text fontWeight="bold" fontSize="20px" m="auto 10px">
                {userProfile.display_name}
              </Text>
            </Box>
            <Text>{userProfile.email}</Text>
          </ModalBody>

          <ModalFooter>
            <Button
              color="red"
              onClick={logOut}
              backgroundColor="white"
              marginLeft="10px"
              rightIcon={<IoLogOutOutline />}
            >
              Log Out
            </Button>
            {/* <Button
              rightIcon={<IoIosArrowRoundForward />}
              backgroundColor="#1DB954"
              color="white"
            >
              <a href={userProfile.external_urls.spotify}>
                Go to Account
              </a>
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </header>
  );
};

export default Header;
