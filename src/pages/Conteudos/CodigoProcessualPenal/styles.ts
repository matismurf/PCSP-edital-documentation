import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width:1120px;
  margin: 4rem auto 4rem;
  padding: 2rem 1.5rem;
  background: ${props=>props.theme["gray-900"]};
  border-radius:8px;
`;

export const Styledh1 = styled.h1`
  font-size:2rem;
  margin-top:2rem;
  margin-bottom:1rem;
`;

export const Styledp = styled.p`
  font-size:1.3rem;
  margin-bottom: 1rem;
`;

export const Styledbutton = styled.button`
  height: 50px;
  align-items: center;
  width:40%;
  border:0;
  background:${props=>props.color};
  padding:1,5rem;
  border-radius:6px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 0.5rem;
  color: ${props=>props.theme["gray-900"]};
  font-weight: bold;

  &:hover{
    background: ${props=>props.theme.white};
  }
`;

export const Centralyze = styled.div`
  justify-content: center;
  align-items:center;
  width: 100%;
  padding-left: 10%;
`;
