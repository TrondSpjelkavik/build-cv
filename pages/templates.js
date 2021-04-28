import Templates from "../components/Templates";
import Meta from "../components/Layout/Meta";

function templates({ data }) {
  return (
    <>
      <Meta
        title="Din CV"
        font="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&display=swap"
        description="Velg blant flere unike maler. Bygg din CV, se igjennom og skriv ut. Her kan du raskt og enkelt lage din egen CV."
      ></Meta>
      <Templates data={data}></Templates>
    </>
  );
}

export default templates;

export async function getStaticProps() {
  const res = await fetch("https://build-cv-api.appspot.com/api");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
