import styled from 'styled-components'

export const Container = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--tertiary);
  @media (min-width: 1024px) {
    width: calc(100% / 3);
    box-shadow: -0.7rem 0 0.5rem -0.6rem rgba(0, 0, 0, 0.075);
  }
  @media (min-width: 1440px) {
    width: calc(48rem + (100vw - 144rem) / 2);
    box-shadow: -0.7rem 0 0.5rem -0.6rem rgba(0, 0, 0, 0.075);
  }
  transform: translateX(100%);
  transition: transform 0.5s cubic-bezier(0.5, 0, 0, 1);
  &.open {
    transform: translateX(0);
  }
  @media (min-width: 1024px) {
    &.scrollOpen {
      transform: translateX(0);
    }
    &.scrollOpen .action-close {
      display: none;
    }
  }
`
