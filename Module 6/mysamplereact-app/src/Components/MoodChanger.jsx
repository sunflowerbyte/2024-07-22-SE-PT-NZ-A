import { useState } from "react";

function MoodChanger() {
  const [mood, setMood] = useState("happy");

function handleRunningLate()

{
    let newMood = "stressed"
    if(mood=="stressed")
        newMood="really stressed"
    else if(mood==="really stressed")
        newMood = "giving up"

    setMood(newMood)

}

function handleWinLotto()
{
    setMood("Ecstatic")
}

  return (
    <>
      <div className="MoodChanger componentBox">Current Mood: {mood}</div>

      <button onClick={() => setMood("tired")}>Stay Up Late</button>
      <button onClick={() => setMood("hungry")}>Skip Lunch</button>

      {/*Using handlers*/}
      <div>
        <button onClick={handleRunningLate}>Running Late</button>
      </div>
      <div>
        <button onClick={handleWinLotto}>Win Lotto</button>
      </div>
    </>
  );
}

export default MoodChanger;
