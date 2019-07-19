import React from 'react';

function Joke(props) {
  return (
    <div>
      <h6 style={{ color: 'pink', display: props.question ? 'block' : 'none' }}>
        Joke: {props.question}
      </h6>
      <h5 style={{ color: !props.question && 'yellow' }}>
        PunchLine: {props.punchline}
      </h5>
    </div>
  );
}
export default Joke;
