import styled from 'styled-components';
import { urlForImage } from '../lib/sanity';
import Wrapper from './wrapper';

const ValuesStyles = styled.div`
  background: ${(props) => props.theme.valuesBackgroundColor};
  margin: 0 auto;

  .values-header {
    text-align: center;
    margin: 0px auto 24px;
    max-width: min(calc(var(--col-width) * 12), calc(100vw - 2 * var(--gutter)));

    h2 {
      font-weight: 500;
      font-size: var(--h2-fs);
      line-height: var(--h2-lh);
      letter-spacing: var(--h2-ls);
      margin-top: 0px;
      margin-bottom: 24px;
    }

    p {
      line-height: 1.5;
      font-size: var(--t2-fs);
      letter-spacing: var(--t2-ls);
    }
  }

  .grid {
    line-height: 1.5;
    font-size: var(--t2-fs);
    letter-spacing: var(--t2-ls);
    display: grid;
    -webkit-box-pack: center;
    justify-content: center;
    margin: 64px auto 0px;
    grid-template-columns: repeat(2, min(calc(var(--col-width) * 9), calc(100vw - 2 * var(--gutter))));
    gap: 60px min(calc(var(--col-width) * 2), calc(100vw - 2 * var(--gutter)));
    max-width: min(calc(var(--col-width) * 20), calc(100vw - 2 * var(--gutter)));

    h3 {
      font-weight: 500;
      font-size: var(--h2-fs);
      line-height: var(--h2-lh);
      letter-spacing: var(--h2-ls);
      margin-bottom: 16px;
    }
  }
`;

function Values({ values = [] }) {
  return (
    <ValuesStyles>
      <Wrapper>
        <div className="values-header">
          <h2>Our Values</h2>
          <p>Our values are the underpinning for all that we do at Figma — we believe that a great product is inextricably linked to a great internal community.</p>
        </div>
        <div className="grid">
          {values.map((value) => {
            const { _id, title, description, picture } = value;
            return (
              <div key={_id} className="grid-item">
                {picture?.asset?._ref ? <img alt={`Picture for ${title}`} src={urlForImage(picture).url()} width={540} height={432} /> : null}
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </ValuesStyles>
  );
}

export default Values;
