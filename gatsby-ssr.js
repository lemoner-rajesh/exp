/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'
const client = new ApolloClient({
   // uri: 'https://dev-alh-health.pantheonsite.io/graphql',
})

export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
    // const headComponents = getHeadComponents()
    
    // //const headComponents = getHeadComponents();

    // headComponents.sort((a, b) => {
    //     if (a.props && a.props["data-rh"]) {
    //         return 0;
    //     }
    //     return 1;
    // });
    // headComponents.sort((a, b) => {
    //     if (a.props && a.props["stylesheet"]) {
    //         return 1;
    //     }
    //     return 0;
    // });
    // replaceHeadComponents(headComponents);
    const headComponents = getHeadComponents()
    const styleHeadComponents = headComponents.filter((component) => component.type === 'link' || component.type === 'style')
    const nonStyleHeadComponents = headComponents.filter((component) => component.type !== 'link' && component.type !== 'style')
    replaceHeadComponents([nonStyleHeadComponents, styleHeadComponents])
    //console.log(headComponents)
}

export const wrapRootElement = ({ element }) => (
    <ApolloProvider client={client}>{element}</ApolloProvider>
)


export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
    // setHeadComponents([
    //     <script
    //       src="/main.js">
    //     </script>,
    //   ])

    console.log("process.env.ENV",process.env.ENV)
    const pluginOptions = {
        head: true,
    };
    if (process.env.ENV !== `production`) {
        return null;
    }

    const setComponents = pluginOptions.head
        ? setHeadComponents
        : setPostBodyComponents;
    return setComponents([
        <script
            async
            type="text/javascript"
            dangerouslySetInnerHTML={{
                __html: `
       (function(c,l,a,r,i,t,y){

        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};

        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;

        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);

    })(window, document, "clarity", "script", "4ykp5i1u2i");
      `,
            }}
        />,
    ]);
};
