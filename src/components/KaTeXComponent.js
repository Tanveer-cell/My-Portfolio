import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

const KaTeXComponent = ({ mathExpression, inline = false }) => {
  if (inline) {
    return <InlineMath math={mathExpression} />;
  } else {
    return <BlockMath math={mathExpression} />;
  }
};

export default KaTeXComponent;
