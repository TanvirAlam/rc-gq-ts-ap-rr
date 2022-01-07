### Initial project setup: 

## Tech used:
- React
- Typescript
- styled-components
- react-router-dom
- graphql
- apollo-client
## Folder Structure:

- src
    - common: `For all global styled used or common styled shared by entire application`
    - components: `this is where all the self-contained reusable components`
        - component: `Single component`
            - name: `Folder for each component`
                - Name.comp.tsx: `Component`
                - Name.style.ts: `StyleSheet from styled-component`
    - pages: `Entire pages such as <About /> | <home />, they use the resource from components`
        - name: `Folder for each component`
            - Name.pages.tsx: `Page for each layouts`
            - Name.style.ts: `Styles for each page`
    - index.tsx: `React index, that renders the entire application`

P.S: 
- The `common` folder has all global stuff that are used by all components and pages
- Know that `react-router-dom` does not support switch anymore, use the following using `element` or `component`

## Interfaces:

- Interfaces: `Creating new folder in common, interfaces that will be shared by the entire application`

## New Component Created:   

- PostsGrid: `That maps all the posts array data and pass each item value to =>`
    - PostsGridItem: `Shows each item with its props`
        - Make sure this is how the props are passed in Typescript
        `const PostsGridItem: React.FC<{post: Post}> = ({post} : {post: Post}) => {}`
        - You can also create internal interface and pass it accordingly, clean code
        ```
        interface PostsGridProps {
            posts: Post[]
        }
        const PostsGrid: React.FC<PostsGridProps> = ({ posts }: PostsGridProps) => {}
        ```
        - As you see each component has its own styling, keep things simple and small
        
## Implementing apollo-client:

-   We create new apollo-services `apollo-client`
    - Install: `"@apollo/client": "^3.5.6"`
    - Create a new file `apollo-client.ts` with the following:
    ```
        import { ApolloClient, InMemoryCache } from '@apollo/client';
    
        const client = new ApolloClient({
            uri: 'https://graphqlzero.almansi.me/api',
            cache: new InMemoryCache()
        });
        
        export default client;
    ```
    - We created this so we can imported in one place and use it through the application:
        - Import it along with `ApolloProvider` in `src/component/app/app.comp.ts`:
        ```
            import { ApolloProvider } from '@apollo/client';
            import client from '../../common/apollo-client';
            
            const App: React.FC = () => {
                return (
                    <ApolloProvider client={client}>
                        ...
                    </ApolloProvider>
                )
            }
        ```
- Lets create our main graphql queries:
    - Create new folder called `hooks`and inside create new directory `posts`
        - Inside: create new query to get all posts: `useGetPosts.ts` with the following:
        ```
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
        ```
        - Look at this `return data?.posts?.data;, the `?` defines conditions
        - once this is defined, import it where ever you want to
        - Example: `home.commp.tsx`
        ```
            import { useGetPosts } from '../../hooks/posts/useGetPosts';
        ```
        - Replace the dummy data with the following: `const posts = useGetPosts();`
        - Just pass it to PostGrid: `<PostsGrid posts={posts || []}/>`
        