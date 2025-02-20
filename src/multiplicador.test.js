import multiplicador from "./multiplicar.js";

describe("multiplicar", () => {
  it("deberia multiplicar dos numeros", () => {
    expect(multiplicador(3, 2)).toEqual(6);
  });
});

describe("multiplicar negativos", () => {
  it("deberia multiplicar dos numeros", () => {
    expect(multiplicador(-3, -2)).toEqual(6);
  });
});

describe("multiplicar negativo con positivo", () => {
  it("deberia multiplicar dos numeros", () => {
    expect(multiplicador(-3, 2)).toEqual(-6);
  });
});

describe("multiplicar numeros grandes", () => {
  it("deberia multiplicar dos numeros", () => {
    expect(multiplicador(4862, 3149)).toEqual(15310438);
  });
});

describe("multiplicar numeros y poner una respuesta incorrecta", () => {
    it("deberia multiplicar dos numeros", () => {
      expect(multiplicador(5, 10)).toEqual(50);
    });
  });
