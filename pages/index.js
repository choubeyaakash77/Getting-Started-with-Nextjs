/*
import Header from "../components/Header";

const Index = () => (
    <div>
        <Header />
        <p>Hello Next.js</p>
    </div>
);

export default Index;

import Layout from "../components/MyLayout";

export default () => (
    <Layout>
        <p>Hello Next.js</p>
    </Layout>
);

import Layout from "../components/MyLayout.js";
import Link from "next/link";

const PostLink = props => (
    <li>
        <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

export default () => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            <PostLink id="hello-nextjs" title="Hello Next.js" />
            <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
            <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
            <PostLink id="test-nextjs" title="1 2 3 Check Check" />
        </ul>
    </Layout>
);

*/

// import Layout from "../components/MyLayout.js";
// import Link from "next/link";
// import fetch from "isomorphic-unfetch";
// import React from 'react'

// let search_query = "";

// class Results extends React.Component (

//     render(){

//     }
//     <div>
//         <h1>{props.search_query}</h1>
//         <ul>
//             {props.shows.map(({ show }) => (
//                 <li key={show.id}>
//                     <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
//                         <a>{show.name}</a>
//                     </Link>
//                 </li>
//             ))}
//         </ul>
//     </div>
// );

// Results.getInitialProps = async function() {
//     const res = await fetch(
//         `https://api.tvmaze.com/search/shows?q=${search_query}`
//     );
//     const data = await res.json();

//     console.log(`Show data fetched. Count: ${data.length}`);

//     return {
//         shows: data
//     };
// };

// const search = e => {
//     search_query = document.getElementById("search_query").value;
//     console.log("Search Query : " + search_query);
// };

// const Index = props => (
//     <Layout>
//         <div style={{ marginTop: 50 }}>
//             <input type="text" id="search_query" />
//             <button onClick={search}>Search</button>
//             {search_query === "" ? "" : <Results search_query={search_query} />}
//         </div>
//     </Layout>
// );

// export default Index;

import Layout from "../components/MyLayout.js";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Index = props => (
    <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
            {props.shows.map(({ show }) => (
                <li key={show.id}>
                    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
        shows: data
    };
};

export default Index;
