import styled from 'styled-components';

export const SectionStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SectionHeaderStyled = styled.div`
  display: flex;
  flex-direction: ${({ $type }) => ($type === 'primary' ? 'column' : 'row')};
  align-items: ${({ $type }) => ($type === 'primary' ? '' : 'center')};
  gap: 0.8rem;

  ${({ $type }) =>
    $type === 'secondary' &&
    `
      & > :nth-child(1) {
        order: 2;
      }
      & > :nth-child(2) {
        order: 1;
      }
    `}
`;

export const SectionParagraph = styled.p``;

export const SectionHeading = styled.h3`
  color: var(--color-primary-dark-blue);
  font-size: var(--font-size-body-large);

  @media (min-width: 60rem) {
    font-size: var(--font-size-heading-small-extra);
  }
`;

export const SectionButtonWrapperStyled = styled.div`
  display: none;

  @media (min-width: 60rem) {
    display: block;
  }
`;
