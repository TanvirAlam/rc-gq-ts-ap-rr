import React from 'react'

import PostsGridItem from './posts-grid-item/posts-grid-item.comp';
import { Container, Items } from './posts-grid.style';
import { Post } from '../../common/interfaces/posts.interface';

interface PostsGridProps {
    posts: Post[]
}
const PostsGrid: React.FC<PostsGridProps> = ({ posts }: PostsGridProps) => {
    return (
        <Container>
            { 
                posts.map((post) => (
                    <Items key={post.id}>
                        <PostsGridItem post={post} />
                    </Items>
                ))
            }
        </Container>
    )
}

export default PostsGrid;
