import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  display: flex;
  align-tems: center;
  justify-content: center;
  height: 5rem;
  width: 100%;
  position:fixed;
  top: 0;
  border-bottom: 1px solid white;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 1rem;
`

export const LinkComponent = styled.a`
  font-size: 1rem;
  color: ${(props) => props.theme['gold-1']};
  text-decoration: none;
  padding: 12px;

  &:hover {
    color: ${(props) => props.theme['gray-900']};
    background: ${(props) => props.theme['gold-1']};
  }
`

export const Styledspan = styled.span`
  display: flex;
  align-items: center;

  a{
    text-decoration: none;
    color: ${(props)=>props.theme.white};
  }
`
