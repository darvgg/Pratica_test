import fizzBuzz from "./fizzbuzz";

describe("FizzBuzz", () => {
  
  it("Deberia generar el mismo numero si el numero no sigue una regla", () => {
    expect(fizzBuzz(1)).toEqual("1");
  });

  it("Deberia generar el primer fizz", () => {
    expect(fizzBuzz(3)).toEqual("fizz");
  });

  it("Deberia generar el primer buzz", () => {
    expect(fizzBuzz(5)).toEqual("buzz");
  });

  it("Deberia generar el primer fizzbuzz", () => {
    expect(fizzBuzz(15)).toEqual("fizzbuzz");
  });

});