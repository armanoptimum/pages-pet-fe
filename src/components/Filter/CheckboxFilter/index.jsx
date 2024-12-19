'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  FilterOptionWrapperStyled,
  OptionNameStyled,
  ActionWrapperStyled,
  CheckboxStyled,
  LabelStyled,
  ActionsWrapperStyled,
  ColorBlockStyled,
} from '../styles';

const CheckboxFilter = ({ data, children }) => {
  const router = useRouter();

  const [selectedOptions, setSelectedOptions] = useState({
    gender: [],
    color: [],
    breed: [],
  });

  const handleCheckboxChange = (value) => {
    value = value.toLowerCase();
    const optionType = children.toLowerCase();

    setSelectedOptions((prevSelected) => {
      const updatedSelected = { ...prevSelected };
      if (updatedSelected[optionType].includes(value)) {
        updatedSelected[optionType] = updatedSelected[optionType].filter((item) => item !== value);
      } else {
        updatedSelected[optionType] = [...updatedSelected[optionType], value];
      }
      return updatedSelected;
    });
  };

  useEffect(() => {
    const { gender, color, breed } = selectedOptions;
    const currentQuery = new URLSearchParams(window.location.search);

    gender.forEach((option) => {
      if (!currentQuery.getAll('gender').includes(option)) {
        currentQuery.append('gender', option);
      }
    });

    currentQuery.getAll('gender').forEach((option) => {
      if (!gender.includes(option)) {
        currentQuery.delete('gender', option);
      }
    });

    color.forEach((option) => {
      if (!currentQuery.getAll('color').includes(option)) {
        currentQuery.append('color', option);
      }
    });

    currentQuery.getAll('color').forEach((option) => {
      if (!color.includes(option)) {
        currentQuery.delete('color', option);
      }
    });

    breed.forEach((option) => {
      if (!currentQuery.getAll('breed').includes(option)) {
        currentQuery.append('breed', option);
      }
    });

    currentQuery.getAll('breed').forEach((option) => {
      if (!breed.includes(option)) {
        currentQuery.delete('breed', option);
      }
    });

    router.push(`?${currentQuery.toString()}`, { scroll: false });
  }, [selectedOptions, children, router]);

  return (
    <FilterOptionWrapperStyled>
      <OptionNameStyled>{children}</OptionNameStyled>
      <ActionsWrapperStyled>
        {data.map(({ name, color }, id) => {
          return (
            <ActionWrapperStyled key={id}>
              <CheckboxStyled type="checkbox" onChange={() => handleCheckboxChange(name)} />
              {color && <ColorBlockStyled $color={color} />}
              <LabelStyled>{name}</LabelStyled>
            </ActionWrapperStyled>
          );
        })}
      </ActionsWrapperStyled>
    </FilterOptionWrapperStyled>
  );
};

export default CheckboxFilter;
