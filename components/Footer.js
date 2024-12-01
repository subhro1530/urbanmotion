import {
  Box,
  Flex,
  Text,
  Link,
  VStack,
  HStack,
  Icon,
  Input,
  Button,
  Image,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: FaFacebook, link: "https://facebook.com" },
    { icon: FaTwitter, link: "https://twitter.com" },
    { icon: FaLinkedin, link: "https://linkedin.com" },
    { icon: FaInstagram, link: "https://instagram.com" },
    { icon: FaYoutube, link: "https://youtube.com" },
    { icon: FaGithub, link: "https://github.com" },
  ];

  const navbarLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <Box
      as="footer"
      bg="gray.900"
      color="white"
      py={10}
      px={{ base: 4, md: 12 }}
      bgImage="url('https://static.vecteezy.com/system/resources/thumbnails/033/164/427/small_2x/3d-abstract-digital-technology-green-light-particles-wave-free-png.png')"
      bgSize="cover"
      bgPosition="center"
    >
      {/* Logo Section */}
      <Flex justify="center" mb={8}>
        <Image src="/hori.png" alt="UrbanMotion Logo" w="150px" />
      </Flex>

      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="start"
        maxW="1200px"
        mx="auto"
        mb={10}
      >
        {/* Navigation Links */}
        <VStack align="flex-start" spacing={4} mb={{ base: 6, md: 0 }}>
          <Text fontSize="lg" fontWeight="bold">
            Quick Links
          </Text>
          {navbarLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              color="gray.300"
              _hover={{ color: "white" }}
              fontSize="sm"
            >
              {link.label}
            </Link>
          ))}
        </VStack>

        {/* Newsletter Subscription */}
        <VStack align="flex-start" spacing={4} w={{ base: "100%", md: "40%" }}>
          <Text fontSize="lg" fontWeight="bold">
            Subscribe to Our Newsletter
          </Text>
          <Text color="gray.400" fontSize="sm">
            Stay updated with the latest news, events, and offers. Subscribe to
            our newsletter now!
          </Text>
          <HStack w="100%">
            <Input
              placeholder="Enter your email"
              bg="gray.800"
              border="none"
              _placeholder={{ color: "gray.500" }}
              color="white"
              borderRadius="md"
              w="100%"
            />
            <Button
              bg="green.400"
              color="white"
              _hover={{ bg: "green.500" }}
              px={6}
              borderRadius="md"
            >
              Subscribe
            </Button>
          </HStack>
        </VStack>

        {/* Social Media Links */}
        <VStack align="flex-start" spacing={4}>
          <Text fontSize="lg" fontWeight="bold">
            Follow Us
          </Text>
          <HStack spacing={4}>
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.link}
                isExternal
                aria-label={social.link}
                _hover={{ color: "green.400" }}
              >
                <Icon as={social.icon} boxSize={6} />
              </Link>
            ))}
          </HStack>
        </VStack>
      </Flex>

      {/* Divider */}
      <Box
        borderTop="1px solid"
        borderColor="gray.700"
        mt={8}
        mb={4}
        w="100%"
      />

      {/* Footer Bottom */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
      >
        <Text fontSize="sm" color="gray.500">
          © 2024 UrbanMotion. All rights reserved.
        </Text>
        <HStack spacing={4}>
          <Link
            href="/terms"
            fontSize="sm"
            color="gray.300"
            _hover={{ color: "white" }}
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            fontSize="sm"
            color="gray.300"
            _hover={{ color: "white" }}
          >
            Privacy
          </Link>
          <Link
            href="/faq"
            fontSize="sm"
            color="gray.300"
            _hover={{ color: "white" }}
          >
            FAQ
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
