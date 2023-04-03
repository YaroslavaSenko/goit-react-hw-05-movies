import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  display: inline-block;
  width: 80px;
  text-align: center;
  text-decoration: none;
  color: black;
  margin-bottom: 16px;
  border: 1px solid black;
  border-radius: 4px;
  padding: 4px 6px;
  transition: color 250ms linear, border-color 250ms linear;
  &:hover {
    color: coral;
    border-color: coral;
  }
`;

export const Container = styled.div`
  display: flex;
  padding: 20px 0;
`;

export const DescrItem = styled.li`
  display: flex;
`;

export const MovieDescription = styled.div`
  margin-left: 20px;
`;

export const SubTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  padding: 12px 0;
  margin-right: 10px;
  width: 100px;
`;

export const SubText = styled.p`
  padding: 12px 0;
  max-width: 500px;
`;

export const Poster = styled.img`
  width: 300px;
`;