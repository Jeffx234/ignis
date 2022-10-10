import { Input } from './../../../styles/pages/dashboard';
import styled from 'styled-components'

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline-end: 10px;
  padding-inline-start: 10px;
  margin: 8px 0;
  width: 100%;

  label {
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.default};
  }
`

export const InputComponent = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: ${({ theme }) => theme.colors.gray};
  border-radius: 8px;
  padding: 12px 17px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.Input};
  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
  }
`
export const ContainerInputPassword = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline-end: 10px;
  padding-inline-start: 10px;
  margin: 8px 0;
  width: 100%;

  label {
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 8px;
  }
`

export const InputComponentPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.gray};
  gap: 8px;

  input {
    letter-spacing: 4px;
  }

  button {
    background: transparent;
    border: none;
    outline: none;
    padding: 0 10px;
  }

  svg {
    cursor: pointer;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.white};
  }
`
