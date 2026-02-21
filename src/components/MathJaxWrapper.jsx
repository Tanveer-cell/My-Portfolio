import React, { useEffect, useRef, useState } from 'react';

const MathJaxWrapper = ({ content }) => {
    const containerRef = useRef(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (window.MathJax) {
            setIsReady(true);
            return;
        }

        const existing = document.getElementById('mathjax-script');
        if (existing) {
            existing.addEventListener('load', () => setIsReady(true), { once: true });
            return;
        }

        const script = document.createElement('script');
        script.id = 'mathjax-script';
        script.type = 'text/javascript';
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.0/es5/tex-chtml.js';
        script.async = true;
        script.addEventListener('load', () => setIsReady(true), { once: true });
        document.head.appendChild(script);
    }, []);

    useEffect(() => {
        if (isReady && containerRef.current && window.MathJax?.typesetPromise) {
            window.MathJax.typesetPromise([containerRef.current]);
        }
    }, [content, isReady]);

    return (
        <div ref={containerRef} dangerouslySetInnerHTML={{ __html: content }} />
    );
};

export default React.memo(MathJaxWrapper);
