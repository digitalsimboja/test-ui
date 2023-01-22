import Header from '../components/Header'
import Head from 'next/head'
import TopBar from '../components/TopBar'
import Layout from '../components/Layout'
import StatusBar from '../components/StatusBar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dimension | Flyte</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" min-h-screen">
        <Header />
        <hr  className="mt-3 w-full " />
        <TopBar />
        <hr />
        <StatusBar />
        <Layout />     
      </main>
    </>
  )
}
