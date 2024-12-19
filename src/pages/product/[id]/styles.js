'use client';
import Image from 'next/image';
import styled from 'styled-components';

export const ProductStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--spacing-main-vertical) var(--spacing-main-horizontal);
  gap: 2.125rem;

  @media (min-width: 90rem) {
    flex-direction: row;
  }
`;

export const ImagesWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageWrapperStyled = styled(Image)`
  border-radius: 1rem;
  height: 26.25rem;
  width: 26.25rem;

  @media (min-width: 90rem) {
    flex-direction: row;
    height: 37.5rem;
    width: 37.5rem;
  }
`;

export const SkuStyled = styled.p`
  color: var(--color-neutral-40);
  font-size: var(--font-size-body-medium);
`;

export const NameStyled = styled.h2``;

export const PriceStyled = styled.h2`
  color: var(--color-primary-dark-blue-80);
  font-size: var(--font-size-body-large);
`;

export const ContentWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContentListStyled = styled.ul`
  display: flex;
`;

export const ContentListItemStyled = styled.li`
  display: flex;
`;

export const ButtonsWrapperStyled = styled.div`
  display: flex;
  gap: 1rem;
`;

export const InformationBlockStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InformationListStyled = styled.ul`
  display: flex;
  border-bottom: 0.03rem solid var(--color-neutral-40);
  padding: 1rem;
`;

export const InformationItemStyled = styled.li`
  width: 100%;
  color: var(--color-neutral-40);
  font-size: var(--font-size-body-medium);

  @media (min-width: 90rem) {
    min-width: 20rem;
  }
`;
