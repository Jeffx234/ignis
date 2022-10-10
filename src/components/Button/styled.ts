import styled from 'styled-components'

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-inline-end: 10px;
  padding-inline-start: 10px;
  width: 100%;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }

  a {
    width: 100%;
    display: block;
    height: 13;
    border: 2px solid red;
  }
`

export const ButtonComponent = styled.button`
  padding: 12px 17px;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.primaryRed};
  border: none;
  border-radius: 8px;
  font-family: 'Helvetica', sans-serif;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.default};
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }
`
