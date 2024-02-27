import aniobisiesto from "./aniobisiesto.js";

describe("Determinar si es un año bisiesto", () => {
    it("Si un año es divisible por 400 se retorna true", () => {
        expect(aniobisiesto(2000)).toEqual(true);
    });
    it("Si un año es divisible por 100 pero no por 400 se retorna false", () => {
        expect(aniobisiesto(1900)).toEqual(false);
    });
    it("Si un año es divisible por 4 pero no por 100 se retorna true", () => {
        expect(aniobisiesto(2016)).toEqual(true);
    });
});