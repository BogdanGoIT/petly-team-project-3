import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    gap: 12px;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    gap: 28px;
    padding-bottom: 8px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;

  @media (min-width: 768px) {
    gap: 12px;
  }
`;

export const Label = styled.label`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: ${p => p.theme.fontHeight.const};
  font-weight: ${p => p.theme.fontWeights.normal};

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[5]};
  }
`;

export const Input = styled.input`
  height: 40px;
  width: 100%;

  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes[1]};
  line-height: ${p => p.theme.fontHeight.l};
  font-weight: ${p => p.theme.fontWeights.thin};

  background-color: ${p => p.theme.colors.background};
  border: ${p => p.theme.borders.small};
  border-radius: ${p => p.theme.radii.big};
  border-color: ${p => p.theme.colors.accent};
  padding-left: 14px;

  transition: box-shadow ease 0.25s, border-color ease 0.25s;

  &:hover,
  &:focus {
    box-shadow: 0 0 0 1px ${p => p.theme.colors.hoveredAccent};

    outline: none;
    border-color: ${p => p.theme.colors.hoveredAccent};
  }

  @media (min-width: 768px) {
    height: 48px;
  }
`;

export const Textarea = styled.textarea`
  resize: none;
  width: 100%;

  ::-webkit-scrollbar {
    display: none;
  }

  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes[1]};
  line-height: ${p => p.theme.fontHeight.l};
  font-weight: ${p => p.theme.fontWeights.thin};

  background-color: ${p => p.theme.colors.background};
  border: ${p => p.theme.borders.small};
  border-radius: ${p => p.theme.radii.normal};
  border-color: ${p => p.theme.colors.accent};
  padding: 16px 18px;

  transition: box-shadow ease 0.25s, border-color ease 0.25s;

  &:hover,
  &:focus {
    box-shadow: 0 0 0 1px ${p => p.theme.colors.hoveredAccent};

    outline: none;
    border-color: ${p => p.theme.colors.hoveredAccent};
  }

  ::placeholder {
    font-family: 'Manrope', sans-serif;
  }

  @media (min-width: 768px) {
  }
`;

export const FormButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  width: 100%;

  @media (min-width: 768px) {
    gap: 20px;
    flex-direction: row-reverse;
    width: 380px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const Title = styled.p`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes[5]};
  line-height: ${p => p.theme.fontHeight.l};
  font-weight: ${p => p.theme.fontWeights.normal};

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[8]};
  }
`;

export const TopText = styled.p`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes[2]};
  line-height: ${p => p.theme.fontHeight.l};
  font-weight: ${p => p.theme.fontWeights.normal};
  letter-spacing: -1%;
  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[4]};
  }
`;

export const Img = styled.img`
  width: 51px;
  height: 60px;
`;

export const PhotoInput = styled.input`
  display: none;
`;

export const LabelPhotoInput = styled.label`
  background-color: ${p => p.theme.colors.background};

  width: 116px;
  height: 116px;

  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  border-color: ${p => p.theme.colors.accent};

  transition: box-shadow ease 0.25s, border-color ease 0.25s;

  &:hover,
  &:focus {
    box-shadow: 0 0 0 1px ${p => p.theme.colors.hoveredAccent};
    cursor: pointer;
    outline: none;
    border-color: ${p => p.theme.colors.hoveredAccent};
  }

  @media (min-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 116px;
  height: 116px;
  @media (min-width: 768px) {
    width: 140px;
    height: 140px;
`;
export const ImagePlus = styled.img`
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  position: relative;
  top: 0;
  left: 0;
  width: 75px;
  height: 75px;
  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
  z-index: 2;
`;
export const Image = styled.img`
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  position: absolute;
  top: 8px;
  left: 8px;
  width: 100px;
  height: 100px;
  @media (min-width: 768px) {
    top: 10px;
    left: 10px;
    width: 120px;
    height: 120px;
  }
`;
