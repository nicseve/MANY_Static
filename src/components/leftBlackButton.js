import leftBlackArrow from "../assets/icons/left_black.png"
import NavigationButton from "./navigationButton";


const LeftBlackButton = (props) => {
    const leftArrowImage = <img style={props.style} alt='leftBlackArrow' src={leftBlackArrow}/>
    return(
        <NavigationButton path={props.path} displayComponent={leftArrowImage}/>
    )
}

export default LeftBlackButton;