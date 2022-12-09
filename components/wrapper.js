import styled from 'styled-components';

const WrapperStyles = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 20px;
`;

function Wrapper({ children, ...props }) {
  return <WrapperStyles {...props}>{children}</WrapperStyles>;
}

export default Wrapper;
