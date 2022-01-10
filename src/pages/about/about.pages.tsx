import React from 'react'
import PostsForm from '../../component/posts/posts-form/posts-form.comp';

import { Container } from './about.style';

const About: React.FC = () => {
    return (
        <Container>
            <PostsForm />
        </Container>
    )
}

export default About
