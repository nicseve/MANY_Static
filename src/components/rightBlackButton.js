import rightBlackArrow from "../assets/icons/right_black.png";
import NavigationButton from "./navigationButton";

//TODO: Why is the style inline? Should be constant. Specifically, its position should be fixed.
const RightBlackButton = (props) => {
    const RightArrowImage = <img style={{height:'20px',position:'absolute'}} alt='RightBlackArrow' src={rightBlackArrow}/>
    return (
        <NavigationButton path={props.path} navProps={props.navProps} displayComponent={RightArrowImage}/>
    )
}

export default RightBlackButton;