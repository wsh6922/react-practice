// import "./App.css";
// import { Profile, Congratulations, Congratulations2 } from "./Profile.jsx";
// import { Avatar2 } from "./Avatar.jsx";
// import { Avatar3 } from "./Avatar.jsx";
// import { Avatar4 } from "./Avatar.jsx";
// import { Avatar5 } from "./Avatar.jsx";
// import Card from "./Card.jsx";
// import Mandoo from "./Mandoo.jsx";
// import { people, people2, poem } from "./people.js";

// const person = {
//   name: "Gregorio Y. Zara",
//   theme: {
//     backgroundColor: "white",
//     border: "5px solid red",
//     color: "pink",
//   },
// };

// const person1 = {
//   imgUrl: "https://i.imgur.com/7vQD0fPs.jpg",
//   description: "Gregorio Y. Zara",
//   inlineStyle: { backgroundColor: "yellow" },
// };

// const person2 = {
//   avatar: "https://i.imgur.com/1bX5QH6.jpg",
//   description: "Lin Lanying",
//   inlineStyle: { backgroundColor: "pink" },
// };

// function App() {
//   const isBool = false;

//   if (isBool) {
//     return (
//       <section>
//         <h1>Amazing scientists</h1>
//         <Profile />
//         <Profile />
//         <Profile />
//         <Congratulations />
//         <Congratulations2 />
//         <Avatar2 />
//         {/* <ul style={{
//         backgroundColor: 'white',
//         border: '5px solid red',
//         color: 'pink' 
//       }}> */}
//         <h1>{person.name}'s Todos</h1>
//         <ul style={person.theme}>
//           <li>Improve the videophone</li>
//           <li>Prepare aeronautics lectures</li>
//           <li>Work on the alcohol-fuelled engine</li>
//         </ul>
//         <Avatar3
//           imgUrl={person1.imgUrl}
//           description={person1.description}
//         ></Avatar3>
//         <Avatar3
//           imgUrl={person2.avatar}
//           description={person2.description}
//         ></Avatar3>
//         <Avatar4 {...person1}></Avatar4>
//         <Avatar5
//           imgUrl={person2.avatar}
//           description={person2.description}
//           inlineStyle={person2.inlineStyle}
//         ></Avatar5>
//         <Card>
//           <Avatar4 {...person1}></Avatar4>
//         </Card>
//         <Card>
//           <Avatar5
//             imgUrl={person2.avatar}
//             description={person2.description}
//             inlineStyle={person2.inlineStyle}
//           ></Avatar5>
//         </Card>
//         <Card>
//           <h1>HI</h1>
//         </Card>
//         <Mandoo borderColor="pink" width={100}></Mandoo>
//         <Mandoo borderColor="pink" width={50}></Mandoo>
//       </section>
//     );
//   } else {
//     const isBool2 = true;

//     const peopleList = people.map((people) => <li>{people}</li>);
//     const chemists = people2.filter(
//       (people) => people.profession === "chemist",
//     );

//     // const chemistList = chemists.map((people) => (
//     //   <li key={people.id}>
//     //     <img src={"https://i.imgur.com/" + people.imageId + "s.jpg"}></img>
//     //     <p>
//     //       <b>{people.name}:</b>
//     //       {" " + people.profession + " "}
//     //       known for {people.accomplishment}
//     //     </p>
//     //   </li>
//     // ));

//     return (
//       <>
//         <h1>false</h1>
//         <p>isBool2 태그가 참이기 때문에 컴포넌트가 보임</p>
//         {isBool2 && <Mandoo borderColor="pink" width={100}></Mandoo>}
//         <ol style={{ color: "red" }}>{peopleList}</ol>
//         <ul>
//           {chemists.map((people) => (
//             <li>
//               <img
//                 src={"https://i.imgur.com/" + people.imageId + "s.jpg"}
//               ></img>
//               <p>
//                 <b>
//                   <b>{people.name}:</b>
//                   {" " + people.profession + " "}
//                   known for {people.accomplishment}
//                 </b>
//               </p>
//             </li>
//           ))}
//         </ul>
//         <article>
//           {poem.lines.map((line, index) => (
//             <>
//               {index > 0 && <hr />}
//               <p>{line}</p>
//             </>
//           ))}
//         </article>
//       </>
//     );
//   }
// }

// export default App;
