import { useEffect, useRef, useState } from 'react';

const LoadMoreButton = ({ children }) => {
  const [isContentExpanded, setIsContentExpanded] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    // Check if content height is more than the viewport
    function checkContentHeight() {
      if (
        contentRef.current &&
        contentRef.current.scrollHeight > window.innerHeight
      ) {
        console.log('true');
        return true;
      }
      console.log('false');
      return false;
    }

    if (!checkContentHeight()) {
      setIsContentExpanded(true); // If content fits viewport, expand by default
    }
  }, []);

  return (
    <div style={{ overflowY: isContentExpanded ? 'auto' : 'hidden' }}>
      <div ref={contentRef}>{children}</div>

      {!isContentExpanded && (
        <button
          onClick={() => setIsContentExpanded(true)}
          style={{
            display: 'block',
            margin: '20px auto',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
          }}>
          Load more
        </button>
      )}
    </div>
  );
};

export default LoadMoreButton;
