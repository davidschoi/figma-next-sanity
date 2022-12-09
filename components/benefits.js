import styled from 'styled-components';
import Image from 'next/image';
import { urlForImage } from '../lib/sanity';
import Wrapper from './wrapper';

const BenefitsStyles = styled.div`
  background: ${(props) => props.theme.benefitsBackgroundColor};
  margin: 0 auto;
`;

function Benefits({ benefits = [] }) {
  return (
    <BenefitsStyles>
      <Wrapper>
        <h2>Benefits</h2>
        {benefits.map((benefit) => {
          const { _id, icon, description } = benefit;
          return (
            <div key={_id}>
              {icon?.asset?._ref ? <img alt={`Icon Image for ${description}`} src={urlForImage(icon).url()} width={24} height={24} /> : null}
              {description}
            </div>
          );
        })}
      </Wrapper>
    </BenefitsStyles>
  );
}

export default Benefits;
