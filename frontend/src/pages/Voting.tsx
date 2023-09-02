import { useEffect, useState } from "react";
import Score from "../components/voting/Score";
import VotingTopBar from "../components/voting/VotingTopBar";

const Voting = () => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    console.log(score);
  }, [score]);

  return (
    <>
      <VotingTopBar />
      <Score score={score} setScore={setScore} />
    </>
  );
};

export default Voting;
