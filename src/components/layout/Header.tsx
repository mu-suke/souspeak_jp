import {
  Container,
  Flex,
  Heading,
  Image,
  Link,
  useBreakpointValue,
} from '@chakra-ui/react'
import NextImage from 'next/image'
import NextLink from 'next/link'
import React from 'react'

const Header: React.FC = () => {
  const imageSrc = useBreakpointValue({
    base: '/images/main_visual_sp.png',
    md: '/images/main_visual.png',
  })
  return (
    <>
      <Container variant="xl" paddingY="0rem">
        <Flex
          px={4}
          py={1}
          alignItems={'center'}
          justifyContent={{ base: 'center', md: 'normal' }}
        >
          <Link as={NextLink} href={'/'}>
            <NextImage
              src={'/images/logo.png'}
              alt={'souspeakのロゴ'}
              width={80}
              height={100}
            />
          </Link>
          <Heading as="h1" size={'md'} pl={2}>
            英語力が一番伸びる語学学校
          </Heading>
        </Flex>
        <Image src={imageSrc} alt={'メインビジュアル'} />
      </Container>
    </>
  )
}

export default Header
