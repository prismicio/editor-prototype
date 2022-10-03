import { Box } from "components/layouts/box";
import { VStack } from "components/layouts/v-stack/vstack";
import type { NextPage } from "next";
import styles from "styles/home.module.css";
import Page from "public/icons/Page.svg";
import Slicemachine from "public/icons/Slicemachine.svg";
import { IconButton } from "components/controls/icon-button/icon-button";

const icons = {
  Slicemachine: <Slicemachine />,
  Page: <Page />
};

const items = [
  { id: "2", name: "sss", icon: Slicemachine },
  { id: "1", name: "sss", icon: Page },
  { id: "3", name: "sss", icon: Page }
];

const Home: NextPage = () => {
  return (
    <Box as="div" className={styles.navigation}>
      <VStack
        space="xs"
        className={styles.stack}
        as="ul"
        items={items}
        children={(item) => {
          const Icon = item.icon;
          return (
            <IconButton>
              <Icon />
            </IconButton>
          );
        }}
      />
    </Box>
  );
};

export default Home;
