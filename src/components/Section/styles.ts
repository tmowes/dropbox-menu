import styled from 'styled-components'
import { FaDropbox } from 'react-icons/fa'

export const Container = styled.div`
  --padding-top: 10rem;
  --padding-bottom: 12rem;
  --heading-font-size: 3.2rem;
  --content-width: 100%;
  &.blue {
    --bg-color: var(--primary);
    --text-color: var(--tertiary);
    --logo-color: var(--secondary);
  }
  &.orange {
    --bg-color: var(--secondary);
    --text-color: var(--quaternary);
    --logo-color: var(--primary);
  }
  &.white {
    --bg-color: var(--tertiary);
    --text-color: var(--quaternary);
    --logo-color: var(--blue);
  }
  &.black {
    --bg-color: var(--quaternary);
    --text-color: var(--tertiary);
    --logo-color: var(--blue);
  }
  &:first-child {
    --padding-top: 13rem;
    --heading-font-size: 5.1rem;
    @media (min-width: 1024px) {
      --content-width: 50%;
      --heading-font-size: 7.1rem;
    }
  }
  background: var(--bg-color);
  position: relative;
`
export const Content = styled.div`
  z-index: 2;
  position: relative;
  max-width: 144rem;
  margin: 0 auto;
  > h2 {
    font-size: var(--heading-font-size);
    color: var(--logo-color);
    max-width: var(--content-width);
  }
  > p {
    margin-top: 2rem;
    font-size: 1.6rem;
    color: var(--text-color);
    max-width: var(--content-width);
  }
  padding: var(--padding-top) 3.2rem var(--padding-bottom);
`
export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  clip: rect(auto, auto, auto, auto);
`

export const Header = styled.header`
  z-index: 3;
  background: var(--bg-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 144rem;
  margin: 0 auto;
  padding: 1.6rem 3.2rem;
  > h1 {
    display: flex;
    align-items: center;
    > span {
      color: var(--text-color);
      margin-left: 1rem;
      font-size: 3rem;
    }
  }
  > button {
    color: var(--text-color);
    font-size: 1.6rem;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`

export const DropboxLogo = styled(FaDropbox)`
  width: 3.6rem;
  height: 3.2rem;
  fill: var(--logo-color);
`
