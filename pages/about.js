import { useEffect } from "react";

export default function about() {
  useEffect(() => {
    console.log(1);
    (async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
      const data = await res.json();
      console.log(data);
      const headers = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      fetch(`http://localhost:4000/stores/1`, headers)
        .then((res1) => res1.json())
        .then((data1) => console.log(data1));
    })();
  }, []);

  return <div>'about' </div>;
}

// async function get(endpoint, params = "") {
//   const apiUrl = `${endpoint}/${params}`;
//   console.log(`%cGET 요청: ${apiUrl} `, "color: #a25cd1;");

//   const res = await fetch(apiUrl, {
//     // JWT 토큰을 헤더에 담아 백엔드 서버에 보냄.
//     headers: {
//       Authorization: `Bearer ${sessionStorage.getItem("token")}`,
//     },
//   });

//   // 응답 코드가 4XX 계열일 때 (400, 403 등)
//   if (!res.ok) {
//     const errorContent = await res.json();
//     const { reason } = errorContent;

//     throw new Error(reason);
//   }

//   const result = await res.json();

//   return result;
// }
