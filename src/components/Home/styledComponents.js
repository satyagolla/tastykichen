import styled from 'styled-components'

export const HomeContainer = styled.div`
  @media screen and (min-width: 768px) {
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 50px;
  }
`

export const Image = styled.img`
  width: 100%;

  @media screen and (min-width: 768px) {
    height: 350px;
  }
`

export const SortContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export const PopularHeading = styled.h1`
  font-family: 'DM sans';
  color: #183b56;
  font-weight: 500;
  margin-bottom: 0px;
`
export const Text = styled.p`
  font-family: 'DM sans';
  color: #64748b;
  font-weight: 500;
`
export const Select = styled.select`
  width: 100px;
`
