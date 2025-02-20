import dividir from "./dividor.js";

describe("Dividir", () => {
  it("deberia Dividir dos numeros", () => {
    expect(dividir(6, 2)).toEqual(3);
  });
});

describe("Dividir entre cero", () => {
    it("deberia Dividir dos numeros", () => {
      expect(dividir(6, 0)).toEqual("Error");
    });
  });

describe("Dividir entre negativos", () => {
    it("deberia Dividir dos numeros", () => {
      expect(dividir(-18, -9)).toEqual(2);
    });
  });

describe("Dividir entre posi y nega", () => {
    it("deberia Dividir dos numeros", () => {
      expect(dividir(-18, 9)).toEqual(-2);
    });
  });