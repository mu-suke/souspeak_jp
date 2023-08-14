import { Center, Heading, Link, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Layout from '@/components/layout'
import type { NextPage } from 'next'

const Statement: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          フィリピン・セブ島のオンライン留学「サウスピーク」| 3ヶ月で英語習得
        </title>
      </Head>
      <Layout containerVariant={'lg'}>
        <Center flexDirection={'column'}>
          <Heading textAlign={'left'} mt={4}>
            弊社の業務提携先であるハタチエイゴ社代表取締役に対する訴訟（全面勝訴）についてのご報告
          </Heading>
          <Text mt={8}>
            弊社の業務提携先である株式会社ハタチエイゴ（以下「ハタチエイゴ社」といいます。）の元代表取締役である柴田浩幸氏（
            <Link href={'https://twitter.com/HAL_J'}>@HAL_J</Link>）が、
            <br />
            <br />
            ハタチエイゴ社の現代表取締役である澤木陽太郎氏を被告として損害賠償の支払を求めた訴訟（横浜地方裁判所令和3年（ワ）第603号損害賠償請求事件）について、
            <br />
            <br />
            令和3年12月26日付で、柴田氏の請求をすべて棄却する旨の判決がなされました。
            <br />
            <br />
            この判決に対して柴田氏は控訴をしなかった結果、同判決は確定し、澤木氏が全面的に勝訴しておりますことをご報告申し上げます。
            <br />
            <br />
            <br />
            柴田氏は従前より、弊社、ハタチエイゴ社および澤木氏らを対象として名誉棄損に該当する言動を繰り返しておりますところ、弊社としましては、今後、柴田氏に対して厳正なる法的措置をとる予定です。
            <br />
            <br />
            <br />
            2023年1月18日
            <br />
            <br />
            South Speak English Institute Inc.
          </Text>
        </Center>
      </Layout>
    </>
  )
}

export default Statement
