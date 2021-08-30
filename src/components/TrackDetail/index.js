import style from "./style.module.css";
import { Box } from "@chakra-ui/react";

const Detail = (props) => {
  return (
    <Box maxW="inherit" isTruncated className={style.container} >
      <p  data-testid="track-title" className={style.title}>
        {props.title}
      </p>
      <p data-testid="artist-name" className={style.artists}>
        <strong>{props.artists}</strong>
      </p>
      <p data-testid="album-name" className={style.album}>
        {props.album}
      </p>
    </Box>
  );
};

export default Detail;
