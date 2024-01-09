// const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;
// const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
// const GITHUB_GRAPHQL = "https://api.github.com/graphql";

// export default async function GetAllRepos() {
//   const response = await fetch(GITHUB_GRAPHQL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
//     },
//     body: JSON.stringify({
//       query: `
//           query {
//             user(login: "${GITHUB_USERNAME}") {
//               repositories(first: 10, orderBy: {field: CREATED_AT, direction: DESC}) {
//                 nodes {
//                   name
//                   description
//                   url
//                 }
//               }
//             }
//           }
//         `,
//     }),
//   });
//   const data = await response.json();
//   return data;
// }
