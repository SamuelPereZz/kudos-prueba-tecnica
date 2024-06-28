import styled from '@emotion/styled';

const StyledButton = styled.button`
  border-radius: 5px;
  color: #fff;
  background: #272727;
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  letter-spacing: 3px;
  border: none;
  cursor: pointer;

  &:hover {
    background: #fff;
    color: #272727;
    border-radius: 5px;
  }
`;

const StyledSpan = styled.span`
  border-radius: 5px;
  color: #fff;
  background: #272727;
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  letter-spacing: 3px;
  border: none;
  cursor: pointer;

  &:hover {
    background: #fff;
    color: #272727;
    border-radius: 5px;
  }
`;

const Botton1 = ({ children, onClick, className, as = 'button' }) => {
  if (as === 'span') {
    return (
      <StyledSpan onClick={onClick} className={className}>
        {children}
      </StyledSpan>
    );
  }

  return (
    <StyledButton onClick={onClick} className={className}>
      {children}
    </StyledButton>
  );
};

export default Botton1;
