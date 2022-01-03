import Head from 'next/head'
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({children}) => {
    return (
        <div>
            <Head>
                <title>Electric Cars, Solar &amp; Clean Energy | Tesla</title>
                <meta name="description" content="Electric Cars, Solar &amp; Clean Energy | Tesla" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default Layout
