import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${p =>
    p.buttonStyle === 'primary' ? p.theme.colors.white : p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes[4]};
  line-height: ${p =>
    Math.floor(p.theme.fontHeight.l * p.theme.fontSizes[4].slice(0, -2)) +
    'px'};
  font-weight: ${p => p.theme.fontWeights.normal};

  background-color: ${p =>
    p.buttonStyle === 'primary' ? p.theme.colors.accent : p.theme.colors.white};
  border: ${p =>
    p.buttonStyle === 'primary'
      ? p.theme.borders.none
      : p.theme.borders.normal + ' ' + p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.big};

  transition: box-shadow ease 0.25s, border-color ease 0.25s,
    background-color ease 0.25s;

  &:focus,
  &:hover {
    outline: none;
    cursor: pointer;
    background-color: ${p =>
      p.buttonStyle === 'primary'
        ? p.theme.colors.hoveredAccent
        : p.theme.colors.white};
    box-shadow: 0 0 0 1px ${p => p.theme.colors.hoveredAccent};
  }

  @media (min-width: 1280px) {
    height: 48px;
  }
`;
