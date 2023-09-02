import { useEffect, useState } from "react";
import Score from "../components/voting/Score";

const Voting = () => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    console.log(score);
  }, [score]);

  return <Score score={score} setScore={setScore} />;
};

export default Voting;
