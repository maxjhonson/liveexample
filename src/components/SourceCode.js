import React, { useEffect, useRef } from 'react';
import { useState } from 'react/cjs/react.development';


const SourceCode = ({ url, language }) => {
    const iframeRef = useRef(null);
    const [iframeSize, setIframeSize] = useState();

    useEffect(() => {
        //setIframeSize(iframe.contentWindow.document.documentElement.scrollHeight + 'px')
    }, [])

    const heightManage=(event)=>{
        //if(src === event.source)
        //srcElement
        console.log(event.source)
    }

    const src = `${url}/embedded/${language}/dark`;
    if (!url) return <div></div>
    return (
        <iframe width="100%" height="300px" scrolling="no" src={src} allowfullscreen="allowfullscreen" frameborder="0" ref={iframeRef}></iframe>
    )
}

export default SourceCode;