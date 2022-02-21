type User = { name: string; age: number };
function typeAliasDemo(user: User) {
  console.log(user.name, "---", user.age);
}

function withoutTypeAlias(user: { name: string; age: number }) {
  console.log(user.name);
}

typeAliasDemo({ name: "mani", age: 22 });
withoutTypeAlias({ name: "mani", age: 22 });