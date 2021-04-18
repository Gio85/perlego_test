import styled from 'styled-components'

// App
export const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto
`


// Home Page
export const Title = styled.h1`
  font-size: 1.5em;
  color: black;
`

// Books page
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
}

export const Books = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;

  @media ${device.mobileS} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0rem;
  }

  @media ${device.mobileM} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0rem;
  }

  @media ${device.mobileL} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(6, 1fr);
  }
`

export const Book = styled.div`
  color: white;
  padding: 0.5rem;
  height: 20rem;
  width: 10rem;

  @media ${device.mobileS} {
    width: 8rem;
    height: 13rem;
  }

  @media ${device.mobileM} {
    width: 8rem;
    height: 15rem;
  }

  @media ${device.mobileL} {
    width: 10rem;
    height: 20rem;
  }
`

export const Cover = styled.img`
  @media ${device.mobileS} {
    max-width: 50%;
  }

  @media ${device.mobileM} {
    max-width: 70%;
  }

  @media ${device.tablet} {
    max-width: 100%;
  }
`

export const BookTitle = styled.p`
  font-size: 1rem;
  color: darkgray;
  
  @media ${device.mobileS} {
    font-size: 0.7rem;
  }

  @media ${device.mobileM} {
    font-size: 0.7rem;
  }

  @media ${device.mobileL} {
    font-size: 1rem;
  }
`

export const BookContributor = styled.p`
  font-size: 1rem;
  color: black;
  
  @media ${device.mobileS} {
    font-size: 0.7rem;
  }

  @media ${device.mobileM} {
    font-size: 0.7rem;
  }

  @media ${device.mobileL} {
    font-size: 1rem;
  }
`
