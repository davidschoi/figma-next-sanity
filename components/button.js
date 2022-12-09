import styled from 'styled-components';

const ButtonStyles = styled.a`
  background: ${(props) => props.theme.fontColor};
  color: #fff;
  display: inline-block;
  border-radius: 10px;
  padding: 14px 24px 16px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  border: 0px;
  cursor: pointer;
  user-select: none;
  transition: transform 200ms ease 0s, background 200ms ease 0s;
  text-align: center;

  &:hover {
    transform: translateY(-2px);
    text-decoration: none;
}
  }
`;

function Button({ children, url, ...props }) {
  return (
    <ButtonStyles href={url} target="_blank" {...props}>
      {children}
    </ButtonStyles>
  );
}

export default Button;
