import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const HeaderStyles = styled.div`
  max-width: 1400px;
  padding: 24px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  .nav-wrapper {
    display: flex;
    align-items: center;

    li {
      .nav-link {
        text-decoration: none;
        outline: none;
        padding: 8px 16px;
        flex-shrink: 0;
        font-size: 16px;
        line-height: 22.4px;
        text-underline-offset: 4px;
        color: var(--textColor);
        margin-right: 8px;
        cursor: pointer;

        &::after {
          content: '';
          opacity: 0;
          transform: translateY(3px) scaleY(0);
          transition: transform 250ms ease 0s, opacity 250ms ease 0s;
          transform-origin: left center;
        }

        &:hover {
          position: relative;

          &::after {
            content: '';
            position: absolute;
            left: 16px;
            right: 16px;
            bottom: 6px;
            height: 3px;
            background: currentcolor;
            opacity: 1;
            transform: translateY(0px) scaleY(1);
          }
        }
      }

      .avatar {
        border-radius: 50%;
        border: 3px solid ${(props) => props.theme.fontColor};
      }
    }
  }
`;
export default function Header() {
  return (
    <HeaderStyles>
      <Link href="/">
        <img src="/images/figma-logo.svg" alt="Figma logo" width="38" height="57" />
      </Link>
      <ul className="nav-wrapper">
        <li>
          <Link href="" className="nav-link">
            David
          </Link>
        </li>
        <li>
          <Link href="" className="nav-link">
            Choi
          </Link>
        </li>
        <li>
          <Link href="" className="nav-link">
            Web
          </Link>
        </li>
        <li>
          <Link href="" className="nav-link">
            Developer
          </Link>
        </li>
        <li>
          <Link href="" className="nav-link">
            Experience
          </Link>
        </li>
        <li>
          <Link href="" className="nav-link">
            @
          </Link>
        </li>
        <li>
          <Link href="" className="nav-link">
            Figma
          </Link>
        </li>
        <li>
          <Link href="">
            <Image src="/images/davidchoi-avatar.jpeg" alt="David Choi avatar" width={48} height={48} className="avatar" priority />
          </Link>
        </li>
      </ul>
    </HeaderStyles>
  );
}
