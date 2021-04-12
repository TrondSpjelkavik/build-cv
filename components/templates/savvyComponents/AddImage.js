import { useState } from "react";
import ImageUploading from "react-images-uploading";

import styled from "styled-components";

const ImageContainer = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HideImage = styled.img`
  border-radius: 50%;
  display: none;
  height: 175px;
  width: 175px;
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
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 645px) {
    margin-left: 10px;
  }
`;

function AddImage() {
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <ImageUploading
      multiple
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey="data_url"
    >
      {({ imageList, onImageUpload, onImageRemoveAll }) => (
        <ImageContainer>
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
              <div key={index}>
                <HideImage src={image["data_url"]} alt="" />
              </div>
            </div>
          ))}
        </ImageContainer>
      )}
    </ImageUploading>
  );
}

export default AddImage;

{
  /* <img
src="https://scontent.ftrd4-1.fna.fbcdn.net/v/t1.6435-9/51116890_10161394781200125_8499480063895404544_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ZayOP_Elp8kAX9ZbqlW&_nc_ht=scontent.ftrd4-1.fna&oh=cd9343f1d701d84cf1d7fa06e3edca19&oe=6094EDF0"
style={{ height: "200px", width: "200px", borderRadius: "50%" }}
></img> */
}
