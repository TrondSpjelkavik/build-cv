import Head from "next/head";

function Meta({ font, title }) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>{title}</title>
      <meta name="description" content="Build your own CV" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href={font} rel="stylesheet" />
    </Head>
  );
}

Meta.defaultProps = {
  font:
    "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap",
  title: "Build a CV",
};

export default Meta;
