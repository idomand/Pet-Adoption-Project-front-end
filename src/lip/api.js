const baseUrl = "http://localhost:5555";

const getEmployees = () => {
  return fetch(baseUrl).then((res) => res.json());
};

// const getEmployeeById = (id) => {
//     return fetch(`${baseUrl}/${id}`).then(res => res.json())
// }

// const addNewEmployee = (data) => {
//     return fetch(baseUrl, {
//         method:'POST',
//         body: JSON.stringify(data),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }).then(res => res.json())
// }

export { getEmployees };
