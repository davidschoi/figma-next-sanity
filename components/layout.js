import Footer from '../components/footer';
import Meta from '../components/meta';
import Header from './header';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
