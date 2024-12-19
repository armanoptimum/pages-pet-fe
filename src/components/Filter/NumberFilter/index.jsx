import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FilterOptionWrapperStyled, OptionNameStyled, NumberStyled } from '../styles';

const NumberFilter = ({ children }) => {
  const router = useRouter();

  const [range, setRange] = useState({
    min: '',
    max: '',
  });

  const handleNumberChange = (e, type) => {
    const value = e.target.value;
    setRange((prevRange) => ({
      ...prevRange,
      [type]: value,
    }));
  };

  useEffect(() => {
    const currentQuery = new URLSearchParams(window.location.search);

    if (range.min) {
      currentQuery.set('min', range.min);
    } else {
      currentQuery.delete('min');
    }

    if (range.max) {
      currentQuery.set('max', range.max);
    } else {
      currentQuery.delete('max');
    }

    router.push(`?${currentQuery.toString()}`, { scroll: false });
  }, [range, router]);

  return (
    <FilterOptionWrapperStyled>
      <OptionNameStyled>{children}</OptionNameStyled>
      <NumberStyled type="number" value={range.min} onChange={(e) => handleNumberChange(e, 'min')} $txt="Min" />

      <NumberStyled type="number" value={range.max} onChange={(e) => handleNumberChange(e, 'max')} $txt="Max" />
    </FilterOptionWrapperStyled>
  );
};

export default NumberFilter;
