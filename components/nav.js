import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Avatar from './avatar';

const NavStyles = styled.div`
  max-width: 1400px;
  padding: 24px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  .logo {
    width: 38px;
  }

  .nav-wrapper {
    display: flex;
    align-items: center;

    li {
      padding: 8px 16px;

      .avatar {
        border-radius: 50%;
        border: 3px solid #000;
      }
    }
  }
`;
export default function Nav() {
  return (
    <NavStyles>
      <Link href="/" className="hover:underline">
        <img src="/images/figma-logo.svg" alt="Figma logo" className="logo" />
      </Link>
      <ul className="nav-wrapper">
        <li>
          <Link href="">David</Link>
        </li>
        <li>
          <Link href="">Choi</Link>
        </li>
        <li>
          <Link href="">Web</Link>
        </li>
        <li>
          <Link href="">Developer</Link>
        </li>
        <li>
          <Link href="">Experience</Link>
        </li>
        <li>
          <Link href="">@</Link>
        </li>
        <li>
          <Link href="">Figma</Link>
        </li>
        <li>
          <Link href="">
            <Image src="/images/davidchoi-avatar.jpeg" alt="David Choi avatar" width={48} height={48} className="avatar" />
          </Link>
        </li>
      </ul>
    </NavStyles>
  );
}
