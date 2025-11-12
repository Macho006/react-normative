// import { use } from "react";

// async function Posts() {
//   const res = await fetch("https://api.escuelajs.co/api/v1/posts");
//   if (!res.ok) throw new Error("Ma'lumot yuklanmadi");
//   return res.json();
// }

// export default function Posts() {
//   const posts = use(Posts());

//   return (
//     <div className="max-w-3xl mx-auto mt-10 p-6">
//       <h1 className="text-2xl font-semibold text-center mb-6">
//         Postlar ro‘yxati
//       </h1>

//       <div className="grid gap-4">
//         {posts.map((post) => (
//           <div
//             key={post.id}
//             className="border p-4 rounded-xl shadow hover:shadow-lg transition"
//           >
//             <h2 className="text-lg font-medium">{post.title}</h2>
//             <p className="text-gray-600 text-sm mt-2 line-clamp-3">
//               {post.body}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
