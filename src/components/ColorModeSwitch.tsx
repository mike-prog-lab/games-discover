import { Box, Flex, Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex align="center" ml={5}>
      <Box mr={2}>Dark Mode</Box>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
    </Flex>
  );
};

export default ColorModeSwitch;
