import Image from 'next/image';
import styled from 'styled-components';

export const SellersStyled = styled.div`
  padding: var(--spacing-main-vertical) var(--spacing-main-horizontal);
  display: flex;
  flex-direction: column;
  gap: 2.188rem;
`;

export const SellersHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SellersTextWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const SellersHeaderText = styled.h3`
  font-size: var(--font-size-body-medium);
`;

export const BoldStyled = styled.h4`
  color: var(--color-primary-dark-blue);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-heading-small-extra);
`;

export const SellersContainerStyled = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  @media (min-width: 71.875rem) {
    grid-template-columns: repeat(7, 1fr);
  }
`;

export const SellersImageStyled = styled(Image)`
  width: 100%;
`;

export const SellersButtonWrapperStyled = styled.div`
  display: none;

  @media (min-width: 60rem) {
    display: block;
  }
`;
