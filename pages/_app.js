import '../css/styles/styles.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MyApp = ({ Component, pageProps }) => {
    return (
        <div>
            <Header />
            <section className="bg-black p-8 opacity-80">
                <div className="container mx-auto min-h-screen">
                    <Component {...pageProps} />
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default MyApp