import React from 'react'
import { Post } from '../../common/interfaces/posts.interface';
import PostsGrid from '../../component/posts-grid/posts-grid.comp';

import { Container } from './home.style';

const Home: React.FC = () => {

    const posts: Post[] = [
        {
            id: '1',
            title: 'title 1',
            body: 'body 1'
        }
    ];
    return (
        <Container>
            <PostsGrid posts={posts}/>
        </Container>
    )
}

export default Home;
