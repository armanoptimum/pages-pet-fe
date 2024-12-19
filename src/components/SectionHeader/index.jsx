import arrowRight from '@/assets/icons/arrow-right-outline.svg';
import arrowBottom from '@/assets/icons/arrow-bottom.svg';
import {
  SectionStyled,
  SectionHeaderStyled,
  SectionParagraph,
  SectionHeading,
  SectionButtonWrapperStyled,
} from './styles';
import Button from '@/components/shared/Button';
import { buttonText } from './data';

const SectionHeader = ({ header, paragraph, type = 'primary' }) => {
  return (
    <SectionStyled>
      <SectionHeaderStyled $type={type}>
        <SectionParagraph>{header}</SectionParagraph>
        <SectionHeading>{paragraph}</SectionHeading>
      </SectionHeaderStyled>
      <SectionButtonWrapperStyled>
        <Button style={type === 'primary' ? 'outline' : 'sort'} icon={type === 'primary' ? arrowRight : arrowBottom}>
          {buttonText[type]}
        </Button>
      </SectionButtonWrapperStyled>
    </SectionStyled>
  );
};

export default SectionHeader;
