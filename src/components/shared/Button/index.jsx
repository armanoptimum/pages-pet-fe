'use client';
import Image from 'next/image';
import { ButtonStyled } from './styles';

const Button = ({ children, style, icon, ...props }) => {
  return (
    <ButtonStyled {...props} $style={style} $noText={!children}>
      {children} {icon && <Image alt="button" src={icon} />}
    </ButtonStyled>
  );
};

export default Button;
