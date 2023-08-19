import styled from 'styled-components'


export const StyledProfile = styled.div`
border: 2px solid #ccc;
border-radius: 5px;
width: 300px;
margin: 10px auto;
`;

export const StyledDescription = styled.div`
padding: 20px;
display:flex;
flex-direction:column;
align-items:center;
border-bottom: 2px solid #ccc;
`;

export const StyledAvatar = styled.img`
width: 200px;
height: 200px;
border-radius: 50%;
margin-bottom: 15px;
`;
export const StyledName = styled.p`
font-size: 18px;
font-weight: bold;
`
export const StyledInfo = styled.p`
font-size: 14px;
color: #444;
`  

export const StyledLabel = styled.span`
color: #444;
font-size: 16px;
`
export const StyledQuantity = styled.span`
font-weight: bold;
font-size: 18px;
`
export const StyledStats = styled.ul`
display:flex;
margin: 0;
padding:0;
justify-content: space-between;
background-color: #E3E3E3;


`
export const StyledStatsList = styled.li`
display:flex;
flex-direction:column;
align-items:center;
gap:10px;
width: 100px;
&:not(:last-child) {
border-right: 2px solid #ccc;
  }

`


  