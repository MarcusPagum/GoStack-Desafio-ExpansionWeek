import styled from 'styled-components';

export const Header = styled.h1`
  background: #3a4354;
  padding-top: 9rem;
  padding-bottom: 9rem;

  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  text-align: center;

  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);

  span {
    color: #e18456;
  }

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }
  @media (max-width: 880px) {
    font-size: 2rem;
  }
  @media (max-width: 670px) {
    font-size: 1.5rem;
  }
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const Intro = styled.p`
  font-size: 2rem;
  text-align: center;
  color: #1e2327;

  padding-top: 3%;
  padding-bottom: 3%;

  hr {
    width: 94%;
    border-bottom: 3px solid #a8a8b3;
    border-left: none;
    border-top: none;
    border-right: none;

    margin: auto;
    padding-top: 3%;
  }
  @media (max-width: 1260px) {
    font-size: 1.6rem;
  }
  @media (max-width: 1000px) {
    font-size: 1.4rem;
  }

  @media (max-width: 900px) {
    font-size: 1.4rem;

    hr {
      display: none;
    }
  }
  @media (max-width: 740px) {
    font-size: 1.2rem;

    hr {
      display: none;
    }
  }
`;

export const SectionRight = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  div {
    order: 1;
    max-width: 66%;
    padding-right: 3%;
    padding-left: 3%;
    h3 {
      font-size: 36px;
      line-height: 42px;
    }

    p {
      font-size: 24px;
      line-height: 36px;
      margin-top: 12px;
      color: #1e2327;
    }
  }

  img {
    order: 2;
    display: flex;
    width: 34%;
    margin: 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  @media (max-width: 1200px) {
    div {
      h3 {
        margin-top: 8px;
        font-size: 24px;
        line-height: 36px;
      }

      p {
        margin-top: 8px;
        font-size: 18px;
        line-height: 32px;
        color: #1e2327;
      }
    }

    img {
      display: block;
      width: 34%;
      margin: 0;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  }

  @media (max-width: 900px) {
    display: block;
    align-items: center;

    div {
      max-width: 100%;
      padding-right: 3%;
      padding-left: 3%;
      h3 {
        text-align: center;
        font-size: 24px;
        margin-top: 25px;
      }

      p {
        text-align: justify;
        font-size: 18px;
        margin-top: 12px;
        margin-bottom: 25px;
        color: #1e2327;
      }
    }

    img {
      display: flex;
      width: 100%;
    }
  }
`;

export const SectionLeft = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  div {
    order: 2;
    max-width: 66%;
    padding-right: 3%;
    padding-left: 3%;
    h3 {
      font-size: 36px;
      line-height: 42px;
    }

    p {
      margin-top: 12px;
      font-size: 24px;
      line-height: 36px;
      color: #1e2327;
    }
  }

  img {
    order: 1;
    display: flex;
    width: 34%;
    margin: 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  @media (max-width: 1200px) {
    div {
      h3 {
        margin-top: 8px;
        font-size: 24px;
        line-height: 36px;
      }

      p {
        margin-top: 8px;
        font-size: 18px;
        line-height: 32px;
        color: #1e2327;
      }
    }

    img {
      display: block;
      width: 34%;
      margin: 0;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  }

  @media (max-width: 900px) {
    display: block;
    align-items: center;

    div {
      max-width: 100%;
      padding-right: 3%;
      padding-left: 3%;
      h3 {
        text-align: center;
        font-size: 24px;
        margin-top: 25px;
      }

      p {
        text-align: justify;
        font-size: 18px;
        margin-top: 12px;
        margin-bottom: 25px;
        color: #1e2327;
      }
    }

    img {
      display: flex;
      width: 100%;
    }
  }
`;
