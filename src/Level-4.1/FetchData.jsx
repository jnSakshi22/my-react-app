const Fdata = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => {
      return data.json();
    })
    .then((post) => {
      console.log(post.name);
    });
};

export default Fdata;
