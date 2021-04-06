import { useState } from "react";
import {
  DetailsContainer,
  SubSubHeadline,
  SubContainer,
  Experience,
  ExperienceInfoParagraph,
  ExperienceInfoParagraphHeadline,
  AddButton,
  InputContainer,
} from "../Original";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [courseYear, setCourseYear] = useState("år");
  const [course, setCourse] = useState("kurs");

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
    <>
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
    </>
  );
}

export default Courses;
