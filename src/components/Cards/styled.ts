import styled from 'styled-components'

export const CardComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.black};

  @media (min-width: 768px) {
    width: 100%;
  }
`

export const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.Title};
  color: ${({ theme }) => theme.colors.white};
`
export const CardText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.TextRegular};
  color: ${({ theme }) => theme.colors.gray};
  max-width: 65ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
export const CardImage = styled.div`
  width: 100%;
  height: 300px;

  img {
    border-radius: 8px;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

export const CardCircle = styled.div`
  border-radius: 50%;
  margin-top: -2.3rem;
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.linearGradient};
  width: 40px;
  height: 40px;
  background: black;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.TextRegular};
`
export const CardButton = styled.div``

export const CardDescription = styled.div`
  height: 30%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    width: 20%;
    background: transparent;
    border: 0;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.TextRegular};
    cursor: pointer;
    transition: filter 0.2s;
    height: 2rem;
    border-radius: 8px;
    &:hover {
      filter: brightness(0.8);
    }
    margin-left: auto;
  }
`
