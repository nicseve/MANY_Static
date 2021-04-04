import styled from 'styled-components'


const StyledGlyph = styled.img`{
  height: 50%;
  width: 60%;
  background-color: aqua;
  object-fit: scale-down;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  -webkit-user-drag: none;
}`


const Glyph = (props) => {
    return (
        <StyledGlyph src={props.path}/>
    )
}


export default Glyph