import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import colors from 'web-check-live/styles/colors';

const StyledFooter = styled.footer`
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 0.5rem 0;
  background: ${colors.backgroundDarker};
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  opacity: 0.75;
  transition: all 0.2s ease-in-out;
  @media (min-width: 1024px) {
    justify-content: space-between;
  }
  &:hover {
    opacity: 1;
  }
  span {
    margin: 0 0.5rem;
    text-align: center; 
  }
`;


const ALink = styled.a`
  color: ${colors.primary};
  font-weight: bold;
  border-radius: 4px;
  padding: 0.1rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: ${colors.primary};
    color: ${colors.backgroundDarker};
    text-decoration: none;
  }
`;

const Footer = (props: { isFixed?: boolean }): JSX.Element => {
  const licenseUrl = 'https://github.com/mvptayco/webAnalyzer/blob/master/LICENSE';
  const authorUrl = 'https://github.com/mvptayco';
  const githubUrl = 'https://github.com/mvptayco/webAnalyzer';
  return (
  <StyledFooter style={props.isFixed ? {position: 'fixed'} : {}}>
    <span>
      View source at <ALink href={githubUrl}>github.com/mvptayco/webAnalyzer</ALink>
    </span>
    <span>
      <Link to="/about">Web Analyzer</Link> is
      licensed under <ALink href={licenseUrl}>MIT</ALink> -
      © <ALink href={authorUrl}>Jhonel Alam</ALink> 2026
    </span>
  </StyledFooter>
  );
}

export default Footer;
