import { Box, Heading, HStack, Icon, Stack, Text } from '@chakra-ui/react'
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";




const Sidenav = () => {

  const navLinks = [
    {
    icon : RiDashboardHorizontalFill,
    text: "Dashboard",
    link : "/"
    },
    {
      icon : BsArrowDownUp,
    text: "Transactions",
    link : "/transactions"
    }
  ];
  return (

    <Stack
      bg="white"
      justify="space-between"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      h="100vh"
    >
     <Box>
     <Heading textAlign="center" fontSize="20px" pt="56px" >@DoSomeCoding</Heading>
       <Box mt="6" mx="12px">
       {
          navLinks.map((nav)=>(
            <HStack  key={nav.text} py="3" px="16" borderRadius="12px"
            
            _hover={{
              bg:"#f3f5f7",
            color:"#171717"
            }}
            color="#797e82"
            > 
            
            <Icon as={nav.icon} />
            <Text fontSize="14px" fontWeight="medium" >{nav.text}</Text>
            
            </HStack>
          ))
        }
       </Box>
     </Box>

       <Box mt="6" mx="12px" mb="6">
       <HStack  py="3" px="16" borderRadius="12px"
            
            _hover={{
              bg:"#f3f5f7",
            color:"#171717"
            }}
            color="#797e82"
            > 
            
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium" >Support</Text>
            
            </HStack>
       </Box>
    </Stack>
  )
}

export default Sidenav