import styled from 'styled-components'
import { FaDropbox } from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  @media (min-width: 1024px) {
    max-width: 48rem;
  }
`
export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 6.1rem;
  padding: 1.6rem 3.2rem;
  > h1 {
    display: flex;
    align-items: center;
    > span {
      color: var(--quaternary);
      margin-left: 1rem;
      font-size: 3rem;
    }
  }
  > button {
    color: var(--quaternary);
    font-size: 2rem;
  }
  @media (min-width: 1024px) {
    justify-content: flex-end;
    > h1 {
      display: none;
    }
  }
`
export const DropboxLogo = styled(FaDropbox)`
  width: 3.6rem;
  height: 3.2rem;
  fill: var(--logo-color);
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 0 3.2rem;
  max-width: 48rem;
  margin: 0 auto;
  > .title {
    color: var(--quaternary);
    font-size: 2.4rem;
  }
  > .subtitle {
    color: var(--quaternary);
    font-size: 1.2em;
    margin-top: 0.4rem;
  }
  > input {
    background: var(--tertiary);
    border: 1px solid var(--border);
    border-radius: 0.8rem;
    color: var(--quaternary);
    font-size: 1.5rem;
    padding: 1.2rem 1.6rem;
    margin-top: 1.6rem;
  }
  > button {
    margin-top: 1.6rem;
    background: var(--blue);
    color: var(--tertiary);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 1.6rem;
    border-radius: 0.8rem;
    &:hover {
      opacity: 0.8;
    }
    > span {
    }
  }
  > .terms {
    margin-top: 0.4rem;
    color: var(--quaternary);
    font-size: 1.2rem;
    opacity: 0.6;
  }
`
