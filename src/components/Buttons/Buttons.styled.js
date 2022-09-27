import styled from 'styled-components';
export const Btn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.m};
  padding: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.background};
  color: ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.radii.md};
  cursor: pointer;
  transition: scale 250ms;
  :hover {
    scale: 1.1;
  }
`;
