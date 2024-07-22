import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { FaCircleInfo } from "react-icons/fa6";

const PortfolioSection = () => {
  return (
    <HStack justifyContent="space-between" borderRadius="xl" bg="white" p ="6" spacing="16">
  <HStack>
  <Stack>
        <HStack color="black.80">
          <Text fontSize="sm">
            Total Portfolio Value
          </Text>

          <Icon as={FaCircleInfo} />
        </HStack>
        <Text textStyle="h2">118,112,333</Text>
      </Stack>
      <Stack>
        <HStack color="black.80">
          <Text fontSize="sm">
            Wallet Balance
          </Text>

        </HStack>
      <HStack>
      <HStack>
       <Text textStyle="h2">22.477378237</Text><Tag>BTC</Tag>
       </HStack>
       <HStack>
       <Text textStyle="h2">73,433,444</Text><Tag>INR</Tag>
       </HStack>
      </HStack>
      </Stack>

  </HStack>
      <HStack>
        <Button borderRadius="20px">Deposit</Button>
        <Button borderRadius="20px">Widthraw</Button>

      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
