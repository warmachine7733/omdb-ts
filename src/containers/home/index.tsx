import styled from 'styled-components'
import CustomInput from "../../components/input"
import CustomButton from "../../components/button"

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh
`


const Home = () => {
    return <Wrap>
    <CustomInput placeholder="search a movie"/>
    <CustomButton />
    </Wrap>
}
export default Home