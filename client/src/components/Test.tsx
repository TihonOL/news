// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// export default function Test() {
//   const [allCategories, setAllCategories] = useState([]);

//   useEffect(() => {
//     axios
//       .get('/api/categories')
//       .then((res) => setAllCategories(res.data))
//       .catch(console.error);
//   }, []);

//   if (allCategories.length === 0) {
//     return <div>Loading</div>;
//   }

//   return (
//     <div>
//       {allCategories.map((el) => (
//         <div
//           onClick={() => setAllCategories((prev) => prev.filter((e) => e.id !== el.id))}
//         >
//           {el.name}
//         </div>
//       ))}
//     </div>
//   );
// }
