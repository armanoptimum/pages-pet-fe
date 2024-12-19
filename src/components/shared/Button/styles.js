import styled, { css } from 'styled-components';
import { BUTTON_STYLES } from './constants';

const buttonStyles = {
  [BUTTON_STYLES.PRIMARY]: css`
    background-color: var(--color-primary-dark-blue);
  `,
  [BUTTON_STYLES.SECONDARY]: css`
    background-color: var(--color-primary-dark-blue-40);
  `,
  [BUTTON_STYLES.THIRD]: css`
    background-color: var(--color-primary-dark-blue-80);
  `,
  [BUTTON_STYLES.FORTH]: css`
    background-color: var(--color-primary-dark-blue-60);
    border: 2px solid var(--color-primary-dark-blue-40) !important;
  `,
  [BUTTON_STYLES.DISABLED]: css`
    background-color: var(--color-neutral-20);
  `,
  [BUTTON_STYLES.OUTLINE]: css`
    background-color: transparent;
    color: var(--color-primary-dark-blue) !important;
    border: 2px solid !important;
  `,

  [BUTTON_STYLES.SORT]: css`
    background-color: transparent;
    color: var(--color-primary-dark-blue) !important;
    border: 2px solid !important;
    padding: 0.5rem 1.75rem !important;
  `,
};

export const ButtonStyled = styled.button`
  ${({ $style }) => buttonStyles[$style || 'primary']}

  padding: 0.875rem 1.75rem;
  border-radius: var(--border-radius-primary);
  font-size: var(--font-size-body-medium);
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
  font-weight: var(--font-weight-bold);
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  white-space: nowrap;
  ${({ $noText }) => ($noText ? ' padding: 0.75rem' : '')}
`;
