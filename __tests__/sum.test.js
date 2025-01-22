import { sum } from "../src/components/sum";

test("this function should calculate sum of two vars", () => {
  const result = sum(3, 4);
  expect(result).toBe(7);
});
