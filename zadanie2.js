const jsonString = `
{
  "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }]
}
`;
const data = JSON.parse(jsonString);
// console.log('data', data);
const list = data.list;
// console.log('book', book);
let list1=[];
list.forEach(item => {
    let result= {
        name: item.name,
        age: item.age,
        prof: item.prof,
    }
    list1.push(result)
});
console.log (list1)