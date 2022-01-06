import React from 'react'
import { Container } from './posts-grid-item.style';
import { Post } from '../../../common/interfaces/posts.interface';

const PostsGridItem: React.FC<{post: Post}> = ({post} : {post: Post}) => {
    return (
        <Container>
            <ul>
                <li>{post.id}</li>
                <li>{post.title}</li>
                <li>{post.body}</li>
            </ul>
        </Container>
    )
}

export default PostsGridItem;
