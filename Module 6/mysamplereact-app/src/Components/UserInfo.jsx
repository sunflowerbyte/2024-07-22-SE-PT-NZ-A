import Avatar from "./Avatar"

function UserInfo(props)
{
    return(
<div className="UserInfo">
        {/* the user info is one aspect of the comment */}
        <Avatar avatarURL={props.author.avatarUrl}
      name={props.author.name}></Avatar>
        <div className="UserInfo-name">{props.author.name}</div>
        </div>
    )
}

export default UserInfo