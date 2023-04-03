import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
`;
export const Button = styled.button`
  cursor: pointer;
  background-color: coral;
  border: 1px solid coral;
  border-radius: 4px;
  color: #fff;
  transition: color 250ms linear, background-color 250ms linear;
  &:hover {
    color: coral;
    background-color: #fff;
  }
`;
