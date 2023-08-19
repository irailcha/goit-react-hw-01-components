import styled from 'styled-components'

const backgroundRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
  };

export const StyledProfile = styled.div`
border: 2px solid #ccc;
border-radius: 5px;
width: 320px;
margin: 10px auto;
`
export const StyledStatList = styled.div`
display: flex;
justify-content: space-between;
list-style: none;
padding: 0;
margin: 0;
`
export const StyledStatItem = styled.li`
display:flex;
flex-direction:column;
align-items:center;
gap:10px;
padding: 13px;
background-color: ${backgroundRandomColor};
`
export const StyledTitle = styled.h2`
font-size: 24px;
margin:0 auto;
border-bottom: 2px solid #ccc;
padding: 20px;
text-align: center;
`
export const StyledStatLabel = styled.span`
font-weight: bold;
`
export const StyledStatPercentage = styled.span`
font-size: 20px;
color: #333339;
`

