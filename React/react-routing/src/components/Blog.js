import React from 'react';
import { Link, Route, Routes, useMatch } from 'react-router-dom';
import Blog1 from './Blog1';
import Blog2 from './Blog2';
import BlogContent from './BlogContent';

export default function Blog({ topics }) {
    const {url, path} = useMatch()
    return <div>
        <h1>Blog</h1>

        {topics.map((topic, id) => {
            return (
                <li>
                    <Link to={`${url}/${topic.id}`}>{topic.topicName}</Link>
                </li>
            )
        })}

        <Route path={`${path}/:topicId`} element={<BlogContent/>}/>
    </div>;
}
