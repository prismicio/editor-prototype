import { Box } from "components/layouts/box";
import type { NextPage } from "next";
import styles from "styles/home.module.css";
import Slice from "components/cards/slice/slice";
import { Byside } from "components/layouts/by-side";



const Home: NextPage = () => {
  return (
    <Byside>
      <Byside.Primary>
     <Box as="div" className={styles.slices}>
     <Slice/>
     <Slice/>
     <Slice/>
     <Slice/>
    </Box>
      </Byside.Primary>
      <Byside.Sidebar>

<Box as="div" className={styles.slices}>
<Slice/>
<Slice/>
<Slice/>
<Slice/>
</Box>
 </Byside.Sidebar>
    </Byside>
  );
};

export default Home;
