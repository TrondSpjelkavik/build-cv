import Meta from "./Meta";

function GlobalLayout({ children }) {
  return (
    <>
      <Meta></Meta>
      <div>{children}</div>
    </>
  );
}

export default GlobalLayout;
