const r = new RegExp(/^-?\d{2}-?\d{2}-?\d{2}-?\d{2}$/);

console.log(r.test("12345678")); // true
console.log(r.test("12-34-56-78")); // true
console.log(r.test("12-45-7810")); // true
console.log(r.test("-12-45-78-10")); // true