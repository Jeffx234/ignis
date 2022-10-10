import styled from 'styled-components'

export const CardComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 450px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.black};
  width: 100%;
  
`

export const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.TitleCardDesktop};
  color: ${({ theme }) => theme.colors.white};

  
`
export const CardText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.TextRegular};
  color: ${({ theme }) => theme.colors.gray};
  max-width: 65ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  .seeMore {
    max-width: 100%;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.primaryRed};
    cursor: pointer;
    white-space: none;
  }
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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-top: -2.3rem;
  background: ${({ theme }) => theme.colors.linearGradient};
  display: flex;
  align-items: center;
  justify-content: center;

 p {
  border-radius: 50%;
  border-color: ${({ theme }) => theme.colors.linearGradient};
  width: 90%;
  background: ${({ theme }) => theme.colors.background};
  height: 90%;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.TextRegular};
 }
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
