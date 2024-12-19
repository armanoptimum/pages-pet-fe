import {
  SellersStyled,
  SellersHeaderStyled,
  SellersHeaderText,
  SellersContainerStyled,
  SellersImageStyled,
  BoldStyled,
  SellersTextWrapperStyled,
  SellersButtonWrapperStyled,
} from './styles';
import arrowRight from '@/assets/icons/arrow-right-outline.svg';
import Button from '@/components/shared/Button';
import { BUTTON_STYLES } from '@/components/shared/Button/constants';
import { sellersList } from './data';

const Sellers = () => {
  return (
    <SellersStyled>
      <SellersHeaderStyled>
        <SellersTextWrapperStyled>
          <SellersHeaderText>Proud to be part of</SellersHeaderText>
          <BoldStyled>Pet Sellers</BoldStyled>
        </SellersTextWrapperStyled>
        <SellersButtonWrapperStyled>
          <Button style={BUTTON_STYLES.OUTLINE} icon={arrowRight}>
            View All our sellers
          </Button>
        </SellersButtonWrapperStyled>
      </SellersHeaderStyled>
      <SellersContainerStyled>
        {sellersList.map(({ src, alt }, id) => (
          <SellersImageStyled key={id} alt={alt} src={src} />
        ))}
      </SellersContainerStyled>
    </SellersStyled>
  );
};

export default Sellers;
