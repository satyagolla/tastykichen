import styled from 'styled-components'

export const WebsiteLogoCart = styled.div`
  display: flex;
  align-items: center;
`

export const Logo = styled.img`
  width: 50px;
  height: 50px;
`

export const Title = styled.p`
  color: #ff951c;
  font-family: 'DM sans';
  margin-left: 10px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
export const Menu = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 24px;
  color: #183b56;
`
export const MenuCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
`
export const ListItemCard = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  align-items: center;
`
export const Item = styled.li`
  margin-left: 20px;
  color: ${props => (props.textColor ? '#ff951c' : '#183b56')};
  font-weight: 500;
  font-family: 'DM sans';
`
export const LogOut = styled.button`
  background-color: #ff951c;
  color: #ffffff;
  font-family: 'DM sans';
  border: none;
  outline: none;
  border-radius: 6px;
  padding: 6px;
  width: 75px;
`
export const Cancel = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  font-size: 24px;
`
