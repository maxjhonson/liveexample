import React from 'react';
import { useContext } from 'react/cjs/react.development';
import BlogContex from '../context/BlogContext';

const MenuListSection = ({ title, posts }) => {

    const renderPosts = () => {
        return posts.map((post) => {
            return <a className="item" href={`/${post._id}`}>{post.title}</a>
        })
    }
    return (
        <div className="item">
            <div className="header">{title}</div>
            <div className="munu">
                {renderPosts()}
            </div>
        </div>
    )
}

export default MenuListSection;