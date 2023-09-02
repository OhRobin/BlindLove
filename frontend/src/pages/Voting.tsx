import { useEffect, useState } from "react";
import Score from "../components/voting/Score";
import VotingTopBar from "../components/voting/VotingTopBar";
import CardSection from "../components/voting/CardSection";

const Voting = () => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    console.log(score);
  }, [score]);

  return (
    <>
      <VotingTopBar />
      <CardSection />
      <Score score={score} setScore={setScore} />
    </>
  );
};

export default Voting;
