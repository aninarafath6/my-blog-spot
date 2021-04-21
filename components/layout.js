import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Head from 'next/head'
const Layout = ({children}) => {
    return ( 
        <div className="content">
             <Head>
        <title>My Blog Spot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
                <Navbar/>
                {children}

                <Footer/>
        </div>
     );
}
 
export default Layout;