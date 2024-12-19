import Image from 'next/image';
import styled from 'styled-components';

export const PaginationStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`;

export const PaginationButtonStyled = styled.button`
  padding: 8px 12px;
  background-color: ${({ $active }) => ($active ? 'var(--color-primary-dark-blue)' : 'transparent')};
  color: ${({ $active }) => ($active ? 'var(--color-neutral-00)' : 'var(--color-primary-dark-blue);')};
  font-weight: var(--font-weight-bold);
  font-size: 20px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 0.5rem;
  min-width: 2.5rem;

  &:hover {
    background-color: var(--color-primary-dark-blue);
    color: var(--color-neutral-00);
  }
`;

export const EllipsisStyled = styled.span`
  font-size: 14px;
  color: #999;
  padding: 0 8px;
`;

export const PaginationIconeStyled = styled(Image)`
  cursor: pointer;
`;
