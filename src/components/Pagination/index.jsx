'use client';
import React, { useState } from 'react';
import { PaginationStyled, PaginationButtonStyled, EllipsisStyled, PaginationIconeStyled } from './styles';
import pagiantionArrowLeft from '@/assets/icons/paginationArrowLeft.svg';
import pagiantionArrowRight from '@/assets/icons/paginationArrowRight.svg';
import { useRouter } from 'next/navigation';

const Pagination = ({ count }) => {
  const router = useRouter();
  const [currentPages, setCurrentPages] = useState({
    start: 1,
    end: Math.min(4, count),
  });
  const [activePage, setActivePage] = useState(1);

  const handlePageClick = (e) => {
    const value = +e.target.innerText;
    setActivePage(value);

    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set('page', value);
    router.push(newUrl.toString(), { scroll: false });
  };

  const handleNext = () => {
    if (currentPages.end < count) {
      const newStart = currentPages.start + 1;
      const newEnd = Math.min(currentPages.end + 1, count);

      setCurrentPages({
        start: newStart,
        end: newEnd,
      });
      setActivePage((prev) => Math.min(prev + 1, count));

      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set('page', activePage + 1);
      router.push(newUrl.toString(), { scroll: false });
    }
  };

  const handlePrev = () => {
    if (currentPages.start > 1) {
      const newStart = currentPages.start - 1;
      const newEnd = currentPages.end - 1;

      setCurrentPages({
        start: newStart,
        end: newEnd,
      });
      setActivePage((prev) => Math.max(prev - 1, 1));

      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set('page', activePage - 1);
      router.push(newUrl.toString(), { scroll: false });
    }
  };

  const generateButtons = () => {
    const buttons = [];
    for (let i = currentPages.start; i <= currentPages.end; i++) {
      buttons.push(
        <PaginationButtonStyled onClick={handlePageClick} $active={i === activePage} key={i}>
          {i}
        </PaginationButtonStyled>
      );
    }
    return buttons;
  };

  return (
    <PaginationStyled>
      <PaginationIconeStyled alt="prev" src={pagiantionArrowLeft} onClick={handlePrev} />
      {generateButtons()}
      {currentPages.end !== count && (
        <>
          <EllipsisStyled>...</EllipsisStyled>
          <PaginationButtonStyled onClick={handlePageClick} $active={activePage === count}>
            {count}
          </PaginationButtonStyled>
        </>
      )}
      <PaginationIconeStyled alt="next" src={pagiantionArrowRight} onClick={handleNext} />
    </PaginationStyled>
  );
};

export default Pagination;
