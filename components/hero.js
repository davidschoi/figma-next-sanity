import Image from 'next/image';
import styled from 'styled-components';
import Button from './button';
import Wrapper from './wrapper';

const HeroStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left {
    width: 540px;
  }

  h1 {
    font-size: 64px;
    font-weight: 500;
    line-height: 1.15;
    letter-spacing: -0.03em;
    margin-top: 0;
  }

  p {
    width: 480px;
    font-size: 18px;
    line-height: 1.5;
    letter-spacing: 0.01em;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .cta {
    margin-top: 48px;
  }
`;

function Hero() {
  return (
    <Wrapper>
      <HeroStyles>
        <div className="left">
          <h1>David at Figma</h1>
          <div>
            <p>David is a Developer for the Web Experience team who will build products together. His vision is to make design accessible to all because he knows that nothing great is made alone.</p>
            <p>He would be thrilled to join a team of makers who celebrate their differences and share a passion for their community. I'm excited to visit the global hubs and work remotely in the U.S. from California.</p>
            <p>I hope to join Figma!</p>
          </div>
          <Button url="/David Choi - Resume.pdf" className="cta">
            See resume
          </Button>
        </div>
        <Image src="/images/hero.jpg" alt="Hero image" width={540} height={540} priority />
      </HeroStyles>
    </Wrapper>
  );
}

export default Hero;
