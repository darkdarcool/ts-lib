import test from 'ava';
import { add } from "../src";

test("add", (t) => {
  t.is(add(1, 2), 3);
});
