// function Card({ title, subTitle, content }) {
//   // logics here

//   return (
//     <div className=" border-blue-700 border-2 p-2 flex flex-col items-center rounded-lg ">
//       <h1 className=" text-xl font-bold ">Title: {title}</h1>
//       <h2 className=" text-lg font-semibold ">SubTitle: {subTitle}</h2>
//       <p className="text-center text-lg">{content}</p>
//     </div>
//   );
// }

// export default Card;

function Card(props) {
  console.log("props", props);
  // logics here

  return (
    <div className=" border-blue-700 border-2 p-2 flex flex-col items-center rounded-lg ">
      <h1 className=" text-xl font-bold ">Title: {props.title}</h1>
      <h2 className=" text-lg font-semibold ">SubTitle: {props.subTitle}</h2>
      <p className="text-center text-lg">{props.content}</p>
    </div>
  );
}

export default Card;

// A function only and always returns a single value.
// There are two types of export: default export, Named export
// props means properties
// We can pass single values, array, objects, functions and even other components as a props
