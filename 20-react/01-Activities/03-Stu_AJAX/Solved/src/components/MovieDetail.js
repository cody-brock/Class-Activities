// import React from "react";

// function MovieDetail(props) {
//   const {title, src, director, genre, released} = props
//   return (
//     <div className="text-center">
//       <img alt={title} className="img-fluid" src={src} style={{ margin: "0 auto" }} />
//       <h3>Director(s): {director}</h3>
//       <h3>Genre: {genre}</h3>
//       <h3>Released: {released}</h3>
//     </div>
//   );
// }

// export default MovieDetail;

const obj = {
  string : 'kusdkjhskfh',
  array : ['element1', ['nested element 2', 'nested element 3']],
  object : {
    innerObj :'value'
  }
}

const {string : str, array: [one, [two, three]], object: {innerObj}} = obj;
console.log(innerObj)