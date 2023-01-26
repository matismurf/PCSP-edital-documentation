import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 2rem 1.5rem;
  background: ${(props) => props.theme['gray-900']};
  border-radius: 8px;
  margin-top:8rem;
`

export const Styledh1 = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
`

export const Styledp = styled.p`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`
