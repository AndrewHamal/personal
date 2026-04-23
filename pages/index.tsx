import Footer from "./components/footer";
import NavBar from "./components/navbar";
import HomeScreen from "./homeScreen/HomeScreen";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Anis Hamal | Web, Mobile & AI Automation Developer</title>
        <meta
          name="description"
          content="Portfolio of Anis Hamal, a web, mobile, and AI automation developer focused on polished UI, product-minded engineering, n8n workflows, and production-ready digital experiences."
        />
        <meta
          property="og:title"
          content="Anis Hamal | Web, Mobile & AI Automation Developer"
        />
        <meta
          property="og:description"
          content="Clean interfaces, thoughtful implementation, AI workflows, n8n automation, and product-ready web and mobile development."
        />
        <meta property="og:image" content="/img/working.jpg" />
      </Head>

      <div id="top">
        <NavBar />
        <HomeScreen />
        <Footer />
      </div>
    </>
  );
}
