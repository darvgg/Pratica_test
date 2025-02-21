
describe("FizzBuzz", () => {
  
  it("Deberia generar el mismo numero si el numero no sigue una regla", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });

  it("Deberia generar el primer fizz", () => {
    expect(fizzbuzz(3)).toEqual("fizz");
  });

  it("Deberia generar el primer buzz", () => {
    expect(fizzbuzz(3)).toEqual("buzz");
  });

});