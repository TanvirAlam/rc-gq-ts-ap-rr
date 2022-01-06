### Initial project setup: 

## Tech used:
- React
- Typescript
- styled-components
- react-router-dom

## Folder Structure:

- src
    - common: `For all global styled used or common styled shared by entire application`
    - components: `this is where all the self-contained reusable components`
        - component: `Single component`
            - Name.comp.tsx: `Component`
            - Name.style.ts: `StyleSheet from styled-component`
    - pages: `Entire pages such as <About /> | <home />, they use the resource from components`
        - Name.pages.tsx: `Page for each layouts`
        - Name.style.ts: `Styles for each page`
    - index.tsx: `React index, that renders the entire application`

P.S: 
- The `common` folder has all global stuff that are used by all components and pages
- Know that `react-router-dom` does not support switch anymore, use the following using `element` or `component`
