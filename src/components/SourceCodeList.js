import React from 'react';
import SourceCode from './SourceCode';

const SourceCodeList = ({ selectedPost }) => {
    const { onlineEditorUrl } = selectedPost;
    console.log(selectedPost)
    const renderSourceCode = () => {
        return selectedPost.availableSourceCode.map((language) => {
            return <SourceCode key={language} url={onlineEditorUrl} language={language} />
        })
    }

    renderSourceCode()
    return (
        <div>
            {renderSourceCode()} 
        </div>
    )
}

export default SourceCodeList;