import Meta from "./Meta";
import Footer from "./Footer";

function GlobalLayout({ children }) {
  return (
    <>
      <Meta></Meta>
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default GlobalLayout;
