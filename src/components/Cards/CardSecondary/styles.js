import Image from 'next/image';
import styled from 'styled-components';

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0.5rem;
  background-color: var(--color-neutral-00);
  border-radius: var(--border-radius-secondary);
  gap: 0.5rem;
`;

export const CardImageStyled = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: var(--border-radius-secondary);
`;

export const CardShtamp = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9rem;
  border-radius: 1.75rem;
  color: var(--color-neutral-00);
  background-color: var(--color-state-blue-sea);
  padding: 0.5rem;
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

export const CardsTextStyled = styled.p`
  font-size: var(--font-size-body-medium-s);
  color: var(--color-neutral-80);
  line-height: 1.25rem;
`;
