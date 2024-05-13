import { Box, Container, Heading, SimpleGrid, Text, Button, VStack, Image } from "@chakra-ui/react";
import { FaVideo } from "react-icons/fa";

const Index = () => {
  const packages = [
    { name: "Free", price: "0", features: ["10 participants max", "1 hour limit per meeting"] },
    { name: "Pro", price: "15", features: ["100 participants", "24 hours limit per meeting", "Recording options"] },
    { name: "Enterprise", price: "30", features: ["500 participants", "Unlimited meeting duration", "Advanced security", "24/7 Support"] },
  ];

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} alignItems="center">
        <Image src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGNvbmZlcmVuY2V8ZW58MHx8fHwxNzE1NTk3MzY0fDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="200px" objectFit="cover" borderRadius="full" alt="Video Conference" />
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to StreamConnect
        </Heading>
        <Text fontSize="xl" textAlign="center">
          High-quality video conferencing solutions for businesses of all sizes.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} width="full" py={5}>
          {packages.map((pkg) => (
            <Box key={pkg.name} p={5} shadow="md" borderWidth="1px" borderRadius="lg">
              <VStack>
                <FaVideo size="3em" />
                <Text fontSize="2xl">{pkg.name}</Text>
                <Text fontSize="xl">${pkg.price}/month</Text>
                <Text fontSize="md">Features:</Text>
                <VStack alignItems="start">
                  {pkg.features.map((feature, index) => (
                    <Text key={index}>- {feature}</Text>
                  ))}
                </VStack>
                <Button colorScheme="blue" mt={4}>
                  Choose Plan
                </Button>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
