import Body from "./Body"
import Head from "next/head"
import Navbar from "./Navbar"

const Home = () => {
  return (
    <div className="bg-home">
      <Head>
        <title> Company Name </title>
      </Head>
      <Navbar/>
      <Body />
    </div>
  )
}

export default Home
