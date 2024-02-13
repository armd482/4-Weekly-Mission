import { SNS_MAP_LIST } from '../../constatns/constant';
import * as S from './Footer.styles';
const Footer = () => {
  return (
    <S.StyledFooter>
      <S.FooterCopyright>©codeit - 2023</S.FooterCopyright>
      <S.FooterLinkSection>
        <S.FooterSiteMapNav>
          <S.FooterSiteMapLink href='/'>Privacy Policy</S.FooterSiteMapLink>
          <S.FooterSiteMapLink href='/'>FAQ</S.FooterSiteMapLink>
        </S.FooterSiteMapNav>
        <S.FooterSnsMapNav>
          {SNS_MAP_LIST.map(sns => (
            <a key={sns} href={`https://${sns}.com`} target='_blank' rel='noreferrer noopener'>
              <S.FooterSnsMapImage src={`/icons/${sns}-logo.svg`} alt={sns} />
            </a>
          ))}
        </S.FooterSnsMapNav>
      </S.FooterLinkSection>
    </S.StyledFooter>
  );
};

export default Footer;
