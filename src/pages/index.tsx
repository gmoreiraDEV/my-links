import type { NextPage } from 'next'
import Head from 'next/head'
import { WhatsappLogo } from 'phosphor-react'
import BoxLinks from '../components/BoxLinks'
import Layout from '../components/Layout'
import Link from '../components/Link'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Links | Nuke Digital</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <BoxLinks>
        <Link
          url='https://api.whatsapp.com/send?phone=5511947315901'
          label='WhatsApp'
          icon={<WhatsappLogo size={32} />}
        />
      </BoxLinks>
    </Layout>
  )
}

export default Home
