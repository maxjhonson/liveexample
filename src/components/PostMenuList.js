import React, { useContext } from 'react';
import BlogContex from '../context/BlogContext';
import MenuListSection from './MenuListSection';
import { groupBy } from '../util/helper';

const PostMenuList = () => {
    const { data } = useContext(BlogContex);
    const render = () => {
        const postGrouped = groupBy(data.posts, 'section');
        return Object.entries(postGrouped).map((section) => {
            const [title, posts] = section;
            return <MenuListSection title={title} posts={posts} />
        })

    }
    return (
        <div className="ui left fixed vertical menu"> {render()} </div>
    )
}

export default PostMenuList;