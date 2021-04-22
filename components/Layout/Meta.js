import Head from "next/head";

function Meta({ font, title, description, keywords, icon, icon_apple }) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href={icon}></link>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="apple-touch-icon" href={icon_apple}></link>
      <link href={font} rel="stylesheet" />
    </Head>
  );
}

Meta.defaultProps = {
  font:
    "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap",
  title: "Bygg din egen CV",
  keywords:
    "lag CV, bygg CV, cv, mal, maler, utfylt, forhåndsvisning, utforsk, lag, bygg, skriv ut",
  description:
    "Her kan du raskt og enkelt lage din egen CV. Velg blant flere unike maler. Bygg din CV, se igjennom og skriv ut.",
  icon: "./favicon.ico",
  icon_apple: "./favicon-apple.png",
};

export default Meta;
