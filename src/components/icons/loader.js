import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledIconLoader = styled.svg`
  #AV {
    animation: ${fadeOut} 3s forwards; // Reduced duration to 1s
  }
`;

const PageContent = styled.div`
  opacity: 0;
  animation: ${fadeIn} 1s forwards; // Reduced duration to 1s
`;

const IconLoader = ({ onLoadingComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 1500); // Match the duration of the fadeOut animation

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <>
      {loading ? (
        <StyledIconLoader id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <title>Loader Logo</title>
          <g>
            <g id="AV" transform="translate(0, 0)">
              <text
                x="50"
                y="50"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="80"
                fill="currentColor"
              >
                AV
              </text>
            </g>
          </g>
        </StyledIconLoader>
      ) : (
        <PageContent>
          {/* Your page content goes here */}
        </PageContent>
      )}
    </>
  );
};

export default IconLoader;