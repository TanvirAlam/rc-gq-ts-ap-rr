import { gql, useQuery } from '@apollo/client';
import { Post } from '../../common/interfaces/posts.interface';

const GET_POST = gql`
    query GetPosts($options: PageQueryOptions!) {
        posts(options: $options) {
            data {
                id
                title
                body
            }
        }
    }
`;

export const useGetPosts = (): Post[] | undefined => {
    const { data } = useQuery(GET_POST, {
        variables: { options: { paginate: { page: 1, limit: 10 }}}
    });
    
    return data?.posts?.data;
}