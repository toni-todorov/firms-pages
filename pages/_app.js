import Layout from '../components/Layout'
import FirmContextInitializar from '../context/firmContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <FirmContextInitializar>
                <Component {...pageProps} />
            </FirmContextInitializar>
        </Layout>
    )
}

export default MyApp
