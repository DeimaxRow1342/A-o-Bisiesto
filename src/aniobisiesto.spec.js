import aniobisiesto from "./aniobisiesto.js";

describe("Determinar si es un año bisiesto", () => {
    it("Si un año es divisible por 400 se retorna true", () => {
        expect(aniobisiesto(2000)).toEqual(true);
    });
});