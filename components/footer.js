import Link from 'next/link';
import styled from 'styled-components';
import Wrapper from './wrapper';

const FooterStyles = styled.footer`
  .footer-logo {
    margin-bottom: 19px;
  }

  .logo {
    margin-right: 9px;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    list-style: none;
    padding: 0px;
    margin: 0px;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <Wrapper>
        <Link href="/" className="footer-logo">
          <img src="/images/figma-logo-footer.svg" alt="Figma footer logo" />
        </Link>
        <ul className="social">
          <li>
            <Link href="">
              <img src="/images/github-logo.svg" alt="GitHub logo" height={16} width={16} className="logo" />
              <span>GitHub</span>
            </Link>
          </li>
          <li>
            <Link href="">
              <img src="/images/linkedin-logo.svg" alt="LinkedIn logo" height={16} width={16} className="logo" />
              <span>LinkedIn</span>
            </Link>
          </li>
          <li>
            <Link href="">
              <img src="/images/twitter-logo.svg" alt="Twitter logo" height={16} width={16} className="logo" />
              <span>Twitter</span>
            </Link>
          </li>
        </ul>
      </Wrapper>
    </FooterStyles>
  );
}
