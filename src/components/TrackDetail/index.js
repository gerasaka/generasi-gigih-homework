import style from "./style.module.css";
import { Box, Text } from "@chakra-ui/react";

const Detail = (props) => {
  return (
    <Box maxW="inherit" isTruncated className={style.container} >
      <Text  data-testid="track-title" className={style.title} isTruncated>
        {props.title}
      </Text>
      <Text data-testid="artist-name" className={style.artists} isTruncated>
        <strong>{props.artists}</strong>
      </Text>
      <Text data-testid="album-name" className={style.album} isTruncated>
        {props.album}
      </Text>
    </Box>
  );
};

export default Detail;
