import styled from "styled-components"

const CustomInput = styled.input`
padding: 10px;
font-size: 17px;
border: 1px solid grey;
float: left;
width: 60%;
background: #f1f1f1;
 border-radius: 10px 0px 0px 10px;
 &:hover {
  background: rgba(255,255,255,.9);
     color: #343a40;
  }
`


const Text = (props: any) => {
    return (
       <CustomInput  {...props}/>
    )
}
export default Text