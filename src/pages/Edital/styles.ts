import styled from "styled-components";

export const EditalContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 2rem 1.5rem;
  background: ${(props)=>props.theme["gray-900"]};
  border-radius: 8px;
  margin-top:8rem;
`;

export const Styledh1 = styled.h1`
  font-size: 2rem;
  margin-top:2rem;
  margin-bottom:1rem;
`;

export const Styledp = styled.p`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

export const Styledbutton = styled.button`
  height: 50px;
  width:100%;
  border: 0;
  background: ${props=>props.theme["gold-1"]};
  padding: 0 1,25rem;
  border-radius: 6px;
  cursor:pointer;
  transition: background-color 0.3s;

  &:hover{
    background:${props=>props.theme["green-700"]};
  }

  a{
    color: ${props=>props.theme["gray-900"]};
    font-weight: bold;
    padding: 1rem;
    cursor: pointer;
    text-decoration: none;
  }
`;