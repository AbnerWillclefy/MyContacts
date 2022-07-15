import styled from 'styled-components';

export const Container = styled.div`
  margin: 32px 0px;
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    background: ${({ theme }) => theme.colors.surface};
    border: none;
    border-radius: 25px;
    height: 50px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    padding: 0 16px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.placeholder};
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: center;
  width: 100%;
  margin-top: 32px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.divider};
  padding-bottom: 16px;

  strong {
    font-size: 24px;
  }

  a {
    color: #fff;
    background: ${({ theme }) => theme.colors.main};
    text-decoration: none;
    font-weight: bold;
    border-radius: 4px;
    padding: 8px 16px;

    transition: filter 0.2s ease-in;

    &:hover {
      filter: brightness(1.2)
    }
  }
`;

export const ListHeader = styled.header`
  margin-top: 24px;
  margin-bottom: 8px;

  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;

    span {
      margin-right: 8px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.main};
    }

    img {
      transition: transform 0.2s ease-in;
      transform: ${({ orderBy }) => (orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)')}
    }
  }
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  padding: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        background: ${({ theme }) => theme.colors.tag};
        color: ${({ theme }) => theme.colors.main};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px;
        border-radius: 4px;
        margin-left: 8px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[300]};
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      background: transparent;
      border: none;
      margin-left: 8px;
    }
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;

  .details {
    margin-left: 24px;

    strong {
      font-size: 22px;
      color: ${({ theme }) => theme.colors.danger};
      display: block;
      margin-bottom: 8px;
    }
  }
`;

export const EmptyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 16px;

  p {
    text-align: center;
    margin-top: 8px;

    color: ${({ theme }) => theme.colors.gray[300]};

    strong {
      color: ${({ theme }) => theme.colors.main};
    }
  }
`;

export const SearchNotFoundContainer = styled.div`
  margin-top: 16px;

  display: flex;
  align-items: flex-start;

  span {
    color: ${({ theme }) => theme.colors.gray[300]};
    margin-left: 24px;

    word-break: break-word;
  }
`;
