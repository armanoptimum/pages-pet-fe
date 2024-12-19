import { FilterStyled, FilterNameStyled, FilterOptionsWrapper } from './styles';
import CheckboxFilter from './CheckboxFilter';
import { breedData, colorData, genderData } from './data';
import NumberFilter from './NumberFilter';

const Filter = () => {
  return (
    <FilterStyled>
      <FilterNameStyled>Filter</FilterNameStyled>
      <FilterOptionsWrapper>
        <CheckboxFilter data={genderData}>Gender</CheckboxFilter>
        <CheckboxFilter data={colorData}>Color</CheckboxFilter>
        <NumberFilter>Price</NumberFilter>
        <CheckboxFilter data={breedData}>Breed</CheckboxFilter>
      </FilterOptionsWrapper>
    </FilterStyled>
  );
};

export default Filter;
