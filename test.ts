// test
const age: number = 20;
const firstName: string = "rwaa";
function getDeatails(age: number, name: string): [number, string] | undefined {
  if (name === "rwaa") {
    return [age, name];
  }
}

const result: [number, string] | undefined = getDeatails(age, firstName);
console.log(result ? result : "name must be rwaa");
