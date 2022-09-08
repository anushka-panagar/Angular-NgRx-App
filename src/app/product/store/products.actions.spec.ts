import { Product } from "../model/product";
import { invokeProductsAPI, productsFetchAPIError, productsFetchAPISuccess } from "./products.actions";

const MOCK_DATA: Product[] = [
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
];

/****************************************
 * GET all the products
 ****************************************/
describe('Load All Products ACTION', () => {
  it('should create the action INVOKE PRODUCTS', () => {
    const action = invokeProductsAPI();
    expect({ ...action }).toEqual({ type: '[Product] Invoke Products Fetch API' });
  });
  it('should create the action ProductsFetchAPISuccess', () => {
    const payload = [...MOCK_DATA];
    const action = productsFetchAPISuccess({ allProducts: payload });
    expect({ ...action }).toEqual({ type: '[Products API] Fetch API Success', allProducts: payload });
  });
  it('should create the action ProductsFetchAPIError', () => {
    const payload = new Error('Error loading all products');
    const action = productsFetchAPIError({ error: payload });
    expect({ ...action }).toEqual({
      type: '[Products API] Fetch API Error', error: payload
    });
  });
});
