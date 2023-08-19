import styled from 'styled-components'


export const FriendItem = styled.li`
display: flex;
gap: 15px;
padding:10px;
align-items:center;
border: 2px solid #ccc;
border-radius: 5px;
width: 300px;
margin: 10px auto;
box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`


export const StyleStatus = styled.span`
  $isOnline?: boolean;
  width: 20px;
  height: 20px;
  background-color: ${props => (props.$isOnline ? "green" : "red")};
  border-radius: 50%; 
  display: inline-block; 
`;

export const StyleAvatar = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`
export const StyledName = styled.p`
font-size: 18px;
font-weight: bold;
`