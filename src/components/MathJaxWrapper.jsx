import React, { useEffect, useRef } from 'react';

const MathJaxWrapper = ({ content }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.0/es5/tex-chtml.js';
        script.async = true;
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    useEffect(() => {
        if (containerRef.current && typeof MathJax !== 'undefined') {
            MathJax.typesetPromise([containerRef.current]);
        }
    }, [content]);

    return (
        <div ref={containerRef} dangerouslySetInnerHTML={{ __html: content }} />
    );
};

export default React.memo(MathJaxWrapper);