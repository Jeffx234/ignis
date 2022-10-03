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
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.black};
  padding: 12px 17px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.TextRegular};
`
