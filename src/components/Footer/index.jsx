import {
  FooterStyled,
  SubscriptionBlockStyled,
  SubscriptionTextStyled,
  SubscriptionInputWrapperStyled,
  SubscriptionInputStyled,
  SubscriptionButtonStyled,
  FooterNavbarStyled,
  FooterNavItemTextWrapperStyled,
  FooterNavItemIconWrapperStyled,
  FooterNavbarItemTextStyled,
  FooterNavbarItemIconStyled,
  CopyRightWrapperStyled,
  CopyRightItemStyled,
  TermsPolicyWrapperStyled,
} from './styles';
import Image from 'next/image';
import { footerCopyRightitemData, footerIconItemData, footerTextItemData } from './data';
import logo from '@/assets/icons/logo.svg';

const Footer = () => {
  return (
    <FooterStyled>
      <SubscriptionBlockStyled>
        <SubscriptionTextStyled>Register now so you don't miss our programs</SubscriptionTextStyled>
        <SubscriptionInputWrapperStyled>
          <SubscriptionInputStyled placeholder="Enter your email" />
          <SubscriptionButtonStyled>Subscribe Now</SubscriptionButtonStyled>
        </SubscriptionInputWrapperStyled>
      </SubscriptionBlockStyled>
      <hr />
      <FooterNavbarStyled>
        <FooterNavItemTextWrapperStyled>
          {footerTextItemData.map((item, id) => (
            <FooterNavbarItemTextStyled key={id}>{item}</FooterNavbarItemTextStyled>
          ))}
        </FooterNavItemTextWrapperStyled>

        <FooterNavItemIconWrapperStyled>
          {footerIconItemData.map(({ alt, src }, id) => (
            <FooterNavbarItemIconStyled key={id} alt={alt} src={src} />
          ))}
        </FooterNavItemIconWrapperStyled>
      </FooterNavbarStyled>

      <CopyRightWrapperStyled>
        <CopyRightItemStyled>© 2022 Monito. All rights reserved.</CopyRightItemStyled>
        <Image alt="logo" src={logo} />
        <TermsPolicyWrapperStyled>
          {footerCopyRightitemData.map((item, id) => (
            <CopyRightItemStyled key={id}>{item}</CopyRightItemStyled>
          ))}
        </TermsPolicyWrapperStyled>
      </CopyRightWrapperStyled>
    </FooterStyled>
  );
};

export default Footer;
