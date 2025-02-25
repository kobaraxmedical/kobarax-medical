import React from 'react';

const AnimateMarquee = ({categories}) => {
  return (
    <div className="animate-marque-sec">
      <div className="animate-marque">
        <div className="track">
          <div className="content">
            <h1>
              {categories?.flatMap((category, index) => (
                [1, 2].map((repeat) => (
                  <span key={`${category?.name}-${repeat}-${index}`}>{category?.name}</span>
                ))
              ))}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimateMarquee;