'use client';
import Image from 'next/image';
import styled from 'styled-components';

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  background-color: var(--color-neutral-00);
  border-radius: var(--border-radius-secondary);
  gap: 0.5rem;
`;

export const CardDetailsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 100rem) {
    flex-direction: row;
  }
`;

export const CardImageStyled = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: var(--border-radius-secondary);
`;

export const CardInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding: 0.5rem 0.5rem 1.25rem 0.5rem;
  color: var(--color-neutral-100);
`;
export const CardNameStyled = styled.h5`
  font-size: var(--font-size-body-medium);
`;

export const CardDetailStyled = styled.p`
  color: var(--color-neutral-60);
  font-size: var(--font-size-body-small);
`;

export const CardPriceStyled = styled.h5`
  font-size: var(--font-size-body-medium-s);
`;

export const CardsHeadingStyled = styled.h3`
  color: var(--color-primary-dark-blue);
  font-size: var(--font-size-heading-small-extra);
`;

export const GiftBlockStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  background-color: var(--color-secondary-mon-yellow);
  padding: 0.2rem;
  border-radius: 0.5rem;

  @media (min-width: 60rem) {
    padding: 0.5rem;
    gap: 1rem;
  }
`;

export const GiftNameStyled = styled.p`
  color: var(--color-primary-dark-blue-80);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-body-small-extra);

  @media (min-width: 60rem) {
    font-size: var(--font-size-body-medium);
  }
`;
export const GiftDot = styled.div`
  min-width: 0.3rem;
  min-height: 0.3rem;
  border-radius: 50%;
  background-color: var(--color-primary-dark-blue);
`;
export const GiftImageStyled = styled(Image)``;
