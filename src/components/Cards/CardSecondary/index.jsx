import { CardStyled, CardImageStyled, CardInfoStyled, CardNameStyled, CardsTextStyled, CardShtamp } from './styles';

const CardSecondary = ({ img, header, paragraph }) => {
  return (
    <CardStyled>
      <CardImageStyled src={img} alt="dog" />
      <CardInfoStyled>
        <CardShtamp>Pet Knowledge</CardShtamp>
        <CardNameStyled>{header}</CardNameStyled>
        <CardsTextStyled>{paragraph}</CardsTextStyled>
      </CardInfoStyled>
    </CardStyled>
  );
};

export default CardSecondary;
