import styled, { css } from 'styled-components';

const sizes = {
  small: css`
  height:28px;
  font-size:12px`,
  defaul: css`
  height:36px;
  font-size:14px`,
  big: css`
  height:44px;
  font-size:18px`,
};

const colors = {
  default: css`
  background:#FF5733
  &:hover{
    background:#581845
  }`,
  danger: css`
  background:#e04848`,

};

const Button = styled.button.attrs({
  type: 'button',
})`border-radius:3px;,
  transition:background-color 0.15s ease;
  border:0;
  font-size:12px;
  padding: 0 12px;
  text-tramsform:uppercase;
  ${(props) => sizes[props.size || 'default']}
  ${(props) => colors[props.color || 'default']}`;

export default Button;
