import { Box } from "components/layouts/box";
import { VStack } from "components/layouts/v-stack/vstack";
import type { NextPage } from "next";
import styles from "styles/home.module.css";

const items = [
  { id: "1", name: "sss" },
  { id: "2", name: "sss" }
];

const Home: NextPage = () => {
  return (
    <Box as="div" className={styles.navigation}>
      <VStack
        as="ul"
        items={items}
        children={(item) => <div>{item.name}</div>}
      />
    </Box>
  );
};

export default Home;
