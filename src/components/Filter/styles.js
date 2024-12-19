'use client';
import styled from 'styled-components';

export const FilterStyled = styled.div`
  display: none;
  flex-direction: column;
  padding: var(--spacing-main-vertical) var(--spacing-main-horizontal);
  margin-top: 4.75rem;
  gap: 1.75rem;

  @media (min-width: 60rem) {
    display: flex;
  }
`;

export const FilterNameStyled = styled.h3`
  color: var(--color-primary-dark-blue);
  font-size: var(--font-size-heading-small-extra);
`;

export const FilterOptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FilterOptionWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const OptionNameStyled = styled.h5`
  color: var(--color-neutral-100);
  font-size: var(--font-size-body-medium);
`;

export const ActionsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const ActionWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const CheckboxStyled = styled.input.attrs({ type: 'checkbox' })``;

export const NumberStyled = styled.input.attrs(({ $txt }) => ({
  type: 'number',
  min: '0',
  placeholder: $txt,
}))`
  background-color: transparent;
  font-size: 1.2rem;
  padding: 0.5rem;
  width: 100px;
  border: none;
`;

export const ColorBlockStyled = styled.div`
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
`;

export const LabelStyled = styled.label`
  color: var(--color-neutral-100);
  font-size: var(--font-size-body-medium-s);
`;
