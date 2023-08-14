import { Center, Image, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Layout from '@/components/layout'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          フィリピン・セブ島のオンライン留学「サウスピーク」| 3ヶ月で英語習得
        </title>
      </Head>
      <Layout containerVariant={'lg'}>
        <Center flexDirection={'column'}>
          <Image
            src={'/images/under_construction.png'}
            alt={'閉校中を表す画像'}
            width={'500px'}
          />
          <Text textAlign={'center'}>
            現在閉校中です。
            <br />
            公開まで少々お待ちください。
          </Text>
        </Center>
      </Layout>
    </>
  )
}

export default Home
