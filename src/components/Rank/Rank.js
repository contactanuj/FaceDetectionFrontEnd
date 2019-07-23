import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div className="float">
    <div className="left8">
      <div className="white f3">
      {`${name}, Your current rank is...`}
      </div>
      <div className="white f1">
      {entries}
      </div>
    </div>
    </div>
  );
}

export default Rank;
