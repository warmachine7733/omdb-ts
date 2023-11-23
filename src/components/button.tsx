import styled from "styled-components"

const CustomButton = styled.button`

width: 10%;
padding: 10px;
background: #2196F3;
color: white;
font-size: 17px;
border: 1px solid grey;
border-left: none;
cursor: pointer;
 border-radius: 0px 10px 10px 0px;s
`

const Button = () => {
    return (
       <CustomButton><i className="fa fa-search"></i></CustomButton>
    )
}
export default Button