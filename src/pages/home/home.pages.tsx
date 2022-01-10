import React from 'react'
import { Post } from '../../common/interfaces/posts.interface';
import PostsGrid from '../../component/posts/posts-grid/posts-grid.comp';
import { useGetPosts } from '../../hooks/posts/useGetPosts';

import { Container } from './home.style';

const Home: React.FC = () => {
    const posts = useGetPosts();
    return (
        <Container>
            <PostsGrid posts={posts || []}/>
        </Container>
    )
}

export default Home;
