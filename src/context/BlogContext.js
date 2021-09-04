import React, { useReducer } from 'react';

const BlogContex = React.createContext();

const fakeData = {
    selectedPost: { _id: '1', section: 'JavaScript', onlineEditorUrl: 'https://jsfiddle.net/maxjhonson/3t9g2avq/', title: 'Ho to do this 1', availableSourceCode: ['css', 'js', 'html'], hashtag: ['#react', '#useState'] },
    posts: [
        { _id: '1', section: 'JavaScript', onlineEditorUrl: 'https://jsfiddle.net/maxjhonson/3t9g2avq/', title: 'Ho to do this 1 un texto mas largo de lo normasl', availableSourceCode: ['css', 'js', 'html'], hashtag: ['#react', '#useState'] },
        { _id: '2', section: 'JavaScript', onlineEditorUrl: 'https://jsfiddle.net/maxjhonson/3t9g2avq/', title: 'Ho to do this 2', availableSourceCode: ['css', 'js', 'html'], hashtag: ['#react', '#useState'] },
        { _id: '3', section: 'JavaScript', onlineEditorUrl: 'https://jsfiddle.net/maxjhonson/3t9g2avq/', title: 'Ho to do this 3', hashtag: ['#react', '#useState'] },
        { _id: '4', section: 'React', onlineEditorUrl: 'https://jsfiddle.net/maxjhonson/3t9g2avq/', title: 'Ho to do this 4', availableSourceCode: ['css', 'js', 'html'], hashtag: ['#react', '#useState'] },
        { _id: '5', section: 'React', onlineEditorUrl: 'https://jsfiddle.net/maxjhonson/3t9g2avq/', title: 'Ho to do this 5', availableSourceCode: ['css', 'js', 'html'], hashtag: ['#react', '#useState'] },
        { _id: '6', section: 'React', onlineEditorUrl: 'https://jsfiddle.net/maxjhonson/3t9g2avq/', title: 'Ho to do this 6', availableSourceCode: ['css', 'js', 'html'], hashtag: ['#react', '#useState'] },
        { _id: '7', section: 'React', onlineEditorUrl: 'https://jsfiddle.net/maxjhonson/3t9g2avq/', title: 'Ho to do this 7', availableSourceCode: ['css', 'js', 'html'], hashtag: ['#react', '#useState'] },
        { _id: '8', section: 'React', onlineEditorUrl: 'https://jsfiddle.net/maxjhonson/3t9g2avq/', title: 'Ho to do this 8', availableSourceCode: ['css', 'js', 'html'], hashtag: ['#react', '#useState'] },
    ]

}

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_INITIAL_DATA':
            return fakeData;
        default:
            return fakeData;
    }
}

export const BlogProvider = ({ children }) => {
    const [blogPosts, dispatch] = useReducer(blogReducer, fakeData);
    const loadInitialData = () => {
        dispatch({ type: 'LOAD_INITIAL_DATA' })
    }
    return <BlogContex.Provider value={{ data: blogPosts, loadInitialData }}>
        {children}
    </BlogContex.Provider>
}

export default BlogContex;