import styled from 'styled-components';
export const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 2.25rem;
  align-items: center;
  padding: var(--spacing-main-vertical) var(--spacing-main-horizontal);
  background-color: var(--color-secondary-mon-yellow-40);
`;

export const LeftListBarStyled = styled.ul`
  display: flex;
  align-items: center;
  gap: 3rem;
  color: var(--color-primary-dark-blue);

  @media (max-width: 60rem) {
    display: none;
  }
`;

export const RightListBarStyled = styled.ul`
  display: none;
  align-items: center;
  gap: 0.875rem;
  color: var(--color-primary-dark-blue);

  @media (min-width: 92rem) {
    display: flex;
  }
`;

export const ListItemStyled = styled.li`
  font-size: var(--font-size-body-medium);
  font-weight: var(--font-weight-bold);
  cursor: pointer;
`;

export const ListItemSearchBarStyled = styled.div`
  background-color: var(--color-neutral-00);
  display: flex;
  gap: 0.75rem;
  padding: 1rem;
  width: 17rem;
  border-radius: var(--border-radius-primary);
`;

export const ListItemSearchBarInputStyled = styled.input`
  border: none;
  outline: none;
  color: var(--color-neutral-100);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-body-medium);

  &::placeholder {
    color: var(--color-neutral-40);
  }
`;

export const RegionStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
`;

export const IconBars = styled.ul`
  display: flex;
  gap: 1.125rem;

  @media (min-width: 92rem) {
    display: none;
  }

  @media (max-width: 60rem) {
    display: none;
  }
`;

export const MobileBar = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 60rem) {
    display: none;
  }
`;
export const RegionName = styled.p``;
