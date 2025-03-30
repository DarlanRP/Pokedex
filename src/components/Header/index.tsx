import {HeaderContainer, ImgBackground} from './styles';
import Logo from '../../assets/logoPokemon.png';
import bckLeft from '../../assets/backgroundLeft.svg';
import bckRight from '../../assets/backgroundRight.svg';


export function Header(){
    return(
        <HeaderContainer>
            <ImgBackground><img src={bckLeft} alt="" /></ImgBackground>
            <img src={Logo} alt="" />
            <ImgBackground><img src={bckRight} alt="" /></ImgBackground>
        </HeaderContainer>
    )
}