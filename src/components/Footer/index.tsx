import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { TFunction } from "i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <Large to="/">{t("Get in touch")}</Large>
              <Para>
                {t("Have questions? We're here to help.")}
              </Para>
              <a href="mailto:office@staranise.com.hk">
                <Chat>{t("Contact Us")}</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Services")}</Title>
              <Large to="/">{t("Payroll")}</Large>
              <Large to="/">{t("Secondments")}</Large>
              <Large to="/">{t("Strategic Projects")}</Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Title>{t("Support")}</Title>
              <Large to="/">{t("For Candidates")}</Large>
              <Large to="/">{t("For Employers")}</Large>
              <Large to="/">{t("FAQs")}</Large>
            </Col>
          </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Address")}</Language>
              <Para>Hong Kong</Para>
              <Para>Star Anise Limited</Para>
              <Para>YUZU ALSP</Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Company")}</Title>
              <Large to="/">{t("About YUZU")}</Large>
              <Large to="/">{t("Our Services")}</Large>
              <Large to="/">{t("For Candidates")}</Large>
              <Large to="/">{t("For Employers")}</Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("zh")}>
                  <SvgIcon
                    src="china.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://www.linkedin.com/company/star-anise/"
                src="linkedin.svg"
              />
              <SocialLink
                href="https://twitter.com/staranisehk"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.facebook.com/StarAniseHK/"
                src="facebook.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
