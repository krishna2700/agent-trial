import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const DashboardPage = () => {
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Heading
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
        >
          Dashboard
        </Heading>
        <Box w="full" p={6} borderWidth={1} borderRadius="lg" boxShadow="md">
          <Text fontSize="lg" color="gray.600">
            Welcome to your dashboard!
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default DashboardPage;
