import styled from 'styled-components';
import { FaBullseye } from 'react-icons/fa';

export const CardsContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;

  .disabled-option {
    color: gray;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Card = styled.div`
  display: flex;
  border: 1px solid #495c73;
  border-radius: 5px;
  padding: 2%;
  flex-direction: column;
  gap: 10px;
  background-color: #162c46;
`;

export const Card2 = styled.div``;

export const Select = styled.select`
  border-radius: 5px;
  padding: 5px;
  background-color: #0d2136;

  option {
    color: #97a9c3;
  }
`;

export const Title = styled.h3`
  color: #8aabdc;

  abbr {
    color: #8aabdc;
  }
`;

export const Header = styled.span`
  color: #97a9c3;
  text-decoration: underline;
  font-weight: bold;
`;

export const HorizontalRule = styled.hr`
  border-color: black;
`;

export const Clickable = styled.div`
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: white;
  }
`;

export const FoundIcon = styled(FaBullseye)`
  font-size: 1.2rem;
  color: #97a9c3;
`;

export const LastFound = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #97a9c3;
`;

export const Hour = styled.u`
  color: #97a9c3;
`;
