import rightBlackArrow from "../assets/icons/right_black.png";
import NavigationButton from "./navigationButton";


const RightBlackButton = (props) => {
    const RightArrowImage = <img style={props.style} alt='RightBlackArrow' src={rightBlackArrow}/>
    return (
        <NavigationButton path={props.path} navProps={props.navProps} displayComponent={RightArrowImage}/>
    )
}

export default RightBlackButton;