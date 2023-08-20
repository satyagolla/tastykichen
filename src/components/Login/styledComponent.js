import styled from 'styled-components'

export const InputCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`

export const Label = styled.label`
  font-family: 'DM sans';
  font-weight: 500;
  font-size: 20px;
  line-height: 16px;
  letter-spacing: 1%;
  color: #475569;
  margin-bottom: 8px;
`
export const Input = styled.input`
  height: 40px;
  top: 24px;
  border-radius: 2px;
  background: #e2e8f0;
  border: none;
  outline: none;
  font-size: 22px;
  padding-left: 10px;
`
export const LoginButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: #f7a52a;
  border: none;
  outline: none;
  cursor: pointer;
  color: #ffffff;
  border-radius: 3px;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    margin-top: 15px;
  }
`
export const From = styled.form`
  padding: 20px;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 350px;
    padding: 20px;
    box-shadow: 1px 1px 5px -1px;
  }
`
export const ErrorMsg = styled.p`
  font-family: 'DM sans';
  font-size: '20px';
  color: #f52525;
  margin-top: 0px;
  padding-top: 0px;
`
export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
`
