import Footer from '../components/footer';
import Meta from '../components/meta';
import Nav from './nav';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Nav />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
