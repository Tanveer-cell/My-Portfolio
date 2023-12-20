import React from 'react';
import PropTypes from 'prop-types';
import KaTeXComponent from './KaTeXComponent';

const MarkdownWithKaTeX = ({ content }) => {
  // Use regex to match $$...$$ for block KaTeX and $...$ for inline KaTeX
  const regex = /\$\$([\s\S]*?)\$\$|\$([\s\S]*?)\$/g;
  const parts = content.split(regex);

  return (
    <div>
      {parts.map((part, index) => {
        if (index % 3 === 0) {
          return <span key={index}>{part}</span>;
        } else if (index % 3 === 1) {
          // Block KaTeX
          return <KaTeXComponent key={index} mathExpression={String(part)} />;
        } else {
          // Inline KaTeX
          return (
            <span key={index}>
              <KaTeXComponent mathExpression={String(part)} inline />
            </span>
          );
        }
      })}
    </div>
  );
};

MarkdownWithKaTeX.propTypes = {
  content: PropTypes.string.isRequired,
};

export default MarkdownWithKaTeX;
