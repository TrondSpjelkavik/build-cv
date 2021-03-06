import { useState } from "react";
import ImageUploading from "react-images-uploading";

import styled from "styled-components";

const ImageContainer = styled.div`
  margin-bottom: 10px;
  z-index: 9999;
  @media (max-width: 645px) {
    display: flex;
    justify-content: center;
    margin: 20px 0 30px 0;
  }
`;

const HideImage = styled.img`
  display: none;
  position: absolute;

  right: 50%;
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
                  width="135"
                  height="135"
                  className="hidden"
                />
              </div>
            </div>
          ))}
        </ImageContainer>
      )}
    </ImageUploading>
  );
}

export default AddImage;
