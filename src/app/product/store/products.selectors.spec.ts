import { ProductState } from "./products.reducer";
import { selectProductById, selectProducts } from "./products.selectors";

describe("Selectors", () => {
  const initialState: ProductState = {
    products: [
      {
        id: 2993,
        uid: "5e223283-8ee2-4234-a27c-6188b9961795",
        blend_name: "Veranda Coffee",
        origin: "Mbeya Region, Tanzania",
        variety: "Villa Sarchi",
        notes: "muted, round, orange creamsicle, curry, smokey",
        intensifier: "lingering"
      }, {
        id: 275,
        uid: "cce4347c-03f5-47d1-ba4c-2c6a79915a25",
        blend_name: "Kreb-Full-o Cowboy",
        origin: "Nueva Segovia, Nicaragua",
        variety: "Kaffa",
        notes: "sharp, chewy, green-tea, carbon, red grape",
        intensifier: "mild"
      }
    ],
    collection: ["firstId"],
  };

  it("should select the product list", () => {
    const result = selectProducts.projector(initialState);
    expect(result.length).toEqual(2);
    expect(result[1].id).toEqual(1);
  });
});
