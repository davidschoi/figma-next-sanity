import styled from 'styled-components';

const WrapperStyles = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 20px;
`;

function Wrapper({ children }) {
  return <WrapperStyles>{children}</WrapperStyles>;
}

export default Wrapper;
