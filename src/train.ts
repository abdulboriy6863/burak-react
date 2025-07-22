console.log("Hello!");

//TASK Q
function hasProperty(a: object, b: string) {
  const result = Object.keys(a).some((keys) => keys === b);
  console.log(result);
}
hasProperty({ name: "BMW", model: "M3" }, "model");
hasProperty({ name: "BMW", model: "M3" }, "name");
