import UserInfo from "./UserInfo";
import FormattedText from "./FormattedText";

function ComplexComment(props) {
  // complex component which displays different elements of a comment
  return (
    <>
    <div className="Comment componentBox">
    <UserInfo author={props.author}></UserInfo>
<FormattedText text={props.text}></FormattedText>

      <div className="Comment-date">
        {/* the comment date is another aspect */}
        {props.date.toLocaleString()}
      </div>
    </div>
    </>
  );
}

export default ComplexComment;
