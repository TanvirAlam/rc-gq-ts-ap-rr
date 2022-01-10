import React from 'react'
import { useForm } from 'react-hook-form';

import { Container } from './posts-form.style';

interface FormData {
    title: string;
    body: string;
}
const PostsForm: React.FC = () => {
    const { register, handleSubmit } = useForm<FormData>();
    
    const onSubmit = handleSubmit(({title, body}) => {
        console.log(title, body);
        
    })
    
    return (
        <Container>
            <form onSubmit={onSubmit}>
                <input type="text" {...register("title")} />
                <textarea {...register("body")} />
                <input type="submit" />
            </form>
        </Container>
    )
}

export default PostsForm
