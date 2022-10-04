import { Box } from "components/layouts/box";
import { VStack } from "components/layouts/v-stack/vstack";
import type { NextPage } from "next";
import styles from "styles/home.module.css";
import Slice from "components/cards/slice/slice";




const Home: NextPage = () => {
  return (
    <Box as="div" className={styles.slices}>
     <Slice/>
    </Box>
  );
};

export default Home;
