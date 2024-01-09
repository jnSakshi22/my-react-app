const ChildComponent = () => {
  function add() {
    alert(2 + 3);
  }
  return (
    <div>
      <button onClick={add}>Add</button>
    </div>
  );
};

export default ChildComponent;
