import { useState } from "react";
import ImageUploading from "react-images-uploading";

import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  border-bottom: 2px solid black;
`;

const Headline = styled.h1`
  margin: 20px 0;
`;

const DetailsContainer = styled.table`
  margin: 20px 0;
  border-collapse: collapse;
  justify-content: space-around;
`;
const SubContainer = styled.tr`
  align-items: center;
  position: relative;
`;
const ContactInfoParagraph = styled.td`
  padding-top: 10px;
  display: flex;
  width: 500px;
  justify-content: space-between;
`;

const ExperienceInfoParagraph = styled.td`
  padding: 15px 0;
  max-width: 100px;
  border-bottom: 1px solid black;
`;
const ContactInfoParagraphHeadline = styled.td`
  padding-top: 10px;
  font-weight: 700;
`;

const ExperienceInfoParagraphHeadline = styled.td`
  padding: 15px 0;
  font-weight: 700;
  border-bottom: 3px solid black;
  font-size: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 700px;
  position: relative;
`;

const SubHeadlines = styled.h2`
  margin: 20px 0;
  font-weight: 400;
  font-size: 20px;
`;

const SubSubHeadline = styled.h2`
  margin: 40px 0 0 0px;
  font-weight: 400;
  font-size: 20px;
`;

const BoldText = styled.b``;

const SubParagraphs = styled.div`
  font-size: 18px;
`;

const Experience = styled.tbody`
  text-align: center;
`;

const Other = styled.p`
  font-size: 20px;
  padding: 50px 0;
`;

const AddButton = styled.button`
  position: absolute;
  right: 0;
  background-color: green;
  color: white;
  font-size: 18px;
  padding: 0 3px 0 3px;
  border: none;
  box-shadow: 1px 1px 2px grey;
  cursor: pointer;
`;

const InputContainer = styled.input`
  border: none;
  border-bottom: 1px solid black;
  &:focus {
    outline: none;
    border-bottom: 2px solid black;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 2%;
  right: 0;
`;

const HideImage = styled.img`
  display: none;
  @media print {
    display: block !important;
  }
`;

const AddImageButton = styled.button`
  border: 1px solid black;
  cursor: pointer;
  box-shadow: 1px 1px 1px grey;
  background-color: white;
  padding: 3px;
`;

const ImageText = styled.div`
  margin-top: 10px;
`;

function Original() {
  const [title, setTitle] = useState("Ditt navn");
  const [email, setEmail] = useState("email@email.no");
  const [mobile, setMobile] = useState("+47 00000000");
  const [dob, setDob] = useState("dato/måned/år");
  const [website, setWebsite] = useState("https://www.example.no");
  const [github, setGithub] = useState("https://www.github.com/Username");
  const [address, setAddress] = useState("adresse, postnummer, by");
  const [qualifications, setQualifications] = useState(
    "dine nøkkelkvalifikasjoner"
  );
  const [experience, setExperience] = useState([]);
  const [year, setYear] = useState("år");
  const [company, setCompany] = useState("firma");
  const [position, setPosition] = useState("tittel");

  const [schools, setSchools] = useState([]);
  const [schoolYear, setSchoolYear] = useState("år");
  const [school, setSchool] = useState("skole");
  const [education, setEducation] = useState("studie");

  const [courses, setCourses] = useState([]);
  const [courseYear, setCourseYear] = useState("år");
  const [course, setCourse] = useState("kurs");

  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  function addExperience(e) {
    e.preventDefault();
    setExperience([
      ...experience,
      {
        year: year,
        company: company,
        position: position,
        id: Math.random() * 1000,
      },
    ]);
  }

  function addSchool(e) {
    e.preventDefault();
    setSchools([
      ...schools,
      {
        year: schoolYear,
        school: school,
        education: education,
        id: Math.random() * 1000,
      },
    ]);
  }

  function addCourse(e) {
    e.preventDefault();

    setCourses([
      ...courses,
      {
        year: courseYear,
        course: course,
        id: Math.random() * 1000,
      },
    ]);
  }

  return (
    <Container>
      <HeaderContainer>
        <Headline>
          <div> CV - {title} </div>
          <InputContainer
            onChange={(e) => setTitle(e.target.value)}
            placeholder={title}
            className="show"
            type="text"
          ></InputContainer>
        </Headline>
      </HeaderContainer>

      <DetailsContainer>
        <tbody>
          <SubContainer>
            <ContactInfoParagraphHeadline>E-post:</ContactInfoParagraphHeadline>
            <ContactInfoParagraph>
              <div>{email}</div>
              <InputContainer
                onChange={(e) => setEmail(e.target.value)}
                placeholder={email}
                className="show"
                type="email"
              ></InputContainer>
            </ContactInfoParagraph>
          </SubContainer>

          <SubContainer>
            <ContactInfoParagraphHeadline>
              Telefonummer:
            </ContactInfoParagraphHeadline>
            <ContactInfoParagraph>
              {" "}
              <div>{mobile}</div>
              <InputContainer
                onChange={(e) => setMobile(e.target.value)}
                placeholder={mobile}
                className="show"
                type="tel"
              ></InputContainer>
            </ContactInfoParagraph>
          </SubContainer>
          <SubContainer>
            <ContactInfoParagraphHeadline>Født:</ContactInfoParagraphHeadline>
            <ContactInfoParagraph>
              {" "}
              <div>{dob}</div>
              <InputContainer
                onChange={(e) => setDob(e.target.value)}
                placeholder={dob}
                className="show"
                type="text"
              ></InputContainer>
            </ContactInfoParagraph>
          </SubContainer>
          <SubContainer>
            <ContactInfoParagraphHeadline>
              Hjemmeside:
            </ContactInfoParagraphHeadline>
            <ContactInfoParagraph>
              {" "}
              <div>{website}</div>
              <InputContainer
                onChange={(e) => setWebsite(e.target.value)}
                placeholder={website}
                className="show"
                type="url"
              ></InputContainer>
            </ContactInfoParagraph>
          </SubContainer>
          <SubContainer>
            <ContactInfoParagraphHeadline>Github:</ContactInfoParagraphHeadline>
            <ContactInfoParagraph>
              {" "}
              <div>{github}</div>
              <InputContainer
                onChange={(e) => setGithub(e.target.value)}
                placeholder={github}
                className="show"
                type="url"
              ></InputContainer>
            </ContactInfoParagraph>
          </SubContainer>
          <SubContainer>
            <ContactInfoParagraphHeadline>
              Adresse:
            </ContactInfoParagraphHeadline>
            <ContactInfoParagraph>
              {" "}
              <div>{address}</div>
              <InputContainer
                onChange={(e) => setAddress(e.target.value)}
                placeholder={address}
                className="show"
                type="text"
              ></InputContainer>
            </ContactInfoParagraph>
          </SubContainer>
        </tbody>
      </DetailsContainer>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({ imageList, onImageUpload, onImageRemoveAll }) => (
          <ImageContainer className="upload__image-wrapper">
            <AddImageButton className="show" onClick={onImageUpload}>
              Legg til bilde
            </AddImageButton>
            &nbsp;
            <AddImageButton className="show" onClick={onImageRemoveAll}>
              Fjern bilde
            </AddImageButton>
            {imageList.map((image, index) => (
              <div key={image.file.lastModified}>
                <ImageText className="show">
                  Bilde: <b>{image.file.name}</b>
                </ImageText>
                <div key={index} className="image-item">
                  <HideImage
                    src={image["data_url"]}
                    alt=""
                    width="180"
                    height="180"
                    className="hidden"
                  />
                </div>
              </div>
            ))}
          </ImageContainer>
        )}
      </ImageUploading>
      <SubHeadlines>NØKKELKVALIFIKASJONER</SubHeadlines>
      <SubParagraphs>
        {" "}
        <div>{qualifications}</div>
        <textarea
          style={{ width: "300px", height: "150px", marginTop: "20px" }}
          onChange={(e) => setQualifications(e.target.value)}
          placeholder={qualifications}
          className="show"
          type="text"
        ></textarea>
      </SubParagraphs>
      <SubSubHeadline>ARBEIDSERFARING</SubSubHeadline>
      <DetailsContainer>
        <Experience>
          <SubContainer>
            <ExperienceInfoParagraphHeadline>
              År
            </ExperienceInfoParagraphHeadline>
            <ExperienceInfoParagraphHeadline>
              Firma
            </ExperienceInfoParagraphHeadline>
            <ExperienceInfoParagraphHeadline>
              Tittel
            </ExperienceInfoParagraphHeadline>
          </SubContainer>

          {experience.map((xp) => (
            <SubContainer key={xp.id}>
              <ExperienceInfoParagraph>{xp.year}</ExperienceInfoParagraph>
              <ExperienceInfoParagraph>{xp.company}</ExperienceInfoParagraph>
              <ExperienceInfoParagraph>{xp.position} </ExperienceInfoParagraph>
            </SubContainer>
          ))}

          <SubContainer className="show">
            <ExperienceInfoParagraph>
              <InputContainer
                onChange={(e) => setYear(e.target.value)}
                placeholder={year}
                type="text"
              ></InputContainer>
            </ExperienceInfoParagraph>
            <ExperienceInfoParagraph>
              <InputContainer
                onChange={(e) => setCompany(e.target.value)}
                placeholder={company}
                type="text"
              ></InputContainer>
            </ExperienceInfoParagraph>
            <ExperienceInfoParagraph>
              <InputContainer
                onChange={(e) => setPosition(e.target.value)}
                placeholder={position}
                type="text"
              ></InputContainer>
              <AddButton
                onClick={addExperience}
                experience={experience}
                className="show"
              >
                +
              </AddButton>
            </ExperienceInfoParagraph>
          </SubContainer>
        </Experience>
      </DetailsContainer>
      <SubSubHeadline>UTDANNING</SubSubHeadline>
      <DetailsContainer>
        <Experience>
          <SubContainer>
            <ExperienceInfoParagraphHeadline>
              År
            </ExperienceInfoParagraphHeadline>
            <ExperienceInfoParagraphHeadline>
              Skole
            </ExperienceInfoParagraphHeadline>
            <ExperienceInfoParagraphHeadline>
              Studie
            </ExperienceInfoParagraphHeadline>
          </SubContainer>

          {schools.map((xp) => (
            <SubContainer key={xp.id}>
              <ExperienceInfoParagraph>{xp.year}</ExperienceInfoParagraph>
              <ExperienceInfoParagraph>{xp.school}</ExperienceInfoParagraph>
              <ExperienceInfoParagraph>{xp.education} </ExperienceInfoParagraph>
            </SubContainer>
          ))}

          <SubContainer className="show">
            <ExperienceInfoParagraph>
              <InputContainer
                onChange={(e) => setSchoolYear(e.target.value)}
                placeholder={schoolYear}
                type="text"
              ></InputContainer>
            </ExperienceInfoParagraph>
            <ExperienceInfoParagraph>
              <InputContainer
                onChange={(e) => setSchool(e.target.value)}
                placeholder={school}
                type="text"
              ></InputContainer>
            </ExperienceInfoParagraph>
            <ExperienceInfoParagraph>
              <InputContainer
                onChange={(e) => setEducation(e.target.value)}
                placeholder={education}
                type="text"
              ></InputContainer>
              <AddButton onClick={addSchool} schools={schools} className="show">
                +
              </AddButton>
            </ExperienceInfoParagraph>
          </SubContainer>
        </Experience>
      </DetailsContainer>
      <SubSubHeadline>KURS</SubSubHeadline>
      <DetailsContainer>
        <Experience>
          <SubContainer>
            <ExperienceInfoParagraphHeadline>
              År
            </ExperienceInfoParagraphHeadline>
            <ExperienceInfoParagraphHeadline>
              Kurs
            </ExperienceInfoParagraphHeadline>
          </SubContainer>

          {courses.map((xp) => (
            <SubContainer key={xp.id}>
              <ExperienceInfoParagraph>{xp.year}</ExperienceInfoParagraph>
              <ExperienceInfoParagraph>{xp.course}</ExperienceInfoParagraph>
            </SubContainer>
          ))}

          <SubContainer className="show">
            <ExperienceInfoParagraph>
              <InputContainer
                onChange={(e) => setCourseYear(e.target.value)}
                placeholder={courseYear}
                type="text"
              ></InputContainer>
            </ExperienceInfoParagraph>
            <ExperienceInfoParagraph>
              <InputContainer
                onChange={(e) => setCourse(e.target.value)}
                placeholder={course}
                type="text"
              ></InputContainer>
              <AddButton onClick={addCourse} courses={courses} className="show">
                +
              </AddButton>
            </ExperienceInfoParagraph>
          </SubContainer>
        </Experience>
      </DetailsContainer>
      <SubSubHeadline>ANNET</SubSubHeadline>
      <DetailsContainer>
        <Experience>
          <SubContainer>
            <ExperienceInfoParagraphHeadline>
              Fritidsinteresser
            </ExperienceInfoParagraphHeadline>
            <ExperienceInfoParagraphHeadline>
              Sertifikater
            </ExperienceInfoParagraphHeadline>
          </SubContainer>
          <SubContainer>
            <ExperienceInfoParagraph>
              Trening, kosthold, sport og musikk
            </ExperienceInfoParagraph>
            <ExperienceInfoParagraph>
              Personbil klasse B
            </ExperienceInfoParagraph>
          </SubContainer>
        </Experience>
      </DetailsContainer>
      <Other>Referanser oppgis ved forespørsel</Other>
    </Container>
  );
}

export default Original;
