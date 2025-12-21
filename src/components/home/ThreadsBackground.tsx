import React from "react";
import Threads from "../Threads";

type Props = {
  renderThreads: boolean;
  showThreads: boolean;
};

const ThreadsBackground: React.FC<Props> = ({ renderThreads, showThreads }) => {
  if (!renderThreads) return null;

  return (
    <div
      className={`inset-0 z-0 transition-opacity duration-500 ${
        showThreads ? "opacity-100" : "opacity-0"
      } pointer-events-none`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 opacity-80">
        <Threads
          color={[153, 0, 0]}
          amplitude={3}
          distance={0}
          enableMouseInteraction={false}
        />
      </div>
    </div>
  );
};

export default ThreadsBackground;
