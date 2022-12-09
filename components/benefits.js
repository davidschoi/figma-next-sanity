import styled from 'styled-components';
import { urlForImage } from '../lib/sanity';
import Wrapper from './wrapper';

const BenefitsStyles = styled.div`
  background: ${(props) => props.theme.benefitsBackgroundColor};
  margin: 0 auto;

  .benefits-wrapper {
    --gutterWidth: 32px;
    padding-inline: var(--gutterWidth);
    margin-inline: auto;
    max-width: 752px;

    h2 {
      text-align: center;
      margin: 0px auto 24px;
      max-width: min(calc(var(--col-width) * 12), calc(100vw - 2 * var(--gutter)));
      font-weight: 500;
      font-size: var(--h2-fs);
      line-height: var(--h2-lh);
      letter-spacing: var(--h2-ls);
      margin-top: 0px;
      margin-bottom: 24px;
    }

    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
      margin: 50px auto 30px;

      .grid-item {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        font-size: 18px;
        line-height: 1.4;

        img {
          width: 24px;
          object-fit: contain;
          margin-right: 24px;
          display: block;
        }
      }
    }
  }
`;

function Benefits({ benefits = [] }) {
  return (
    <BenefitsStyles>
      <Wrapper className="benefits-wrapper">
        <h2>Benefits</h2>
        <div className="grid">
          {benefits.map((benefit) => {
            const { _id, icon, description } = benefit;
            return (
              <div key={_id} className="grid-item">
                {icon?.asset?._ref ? <img alt={`Icon Image for ${description}`} src={urlForImage(icon).url()} width={24} height={24} /> : null}
                {description}
              </div>
            );
          })}
        </div>
      </Wrapper>
    </BenefitsStyles>
  );
}

export default Benefits;
