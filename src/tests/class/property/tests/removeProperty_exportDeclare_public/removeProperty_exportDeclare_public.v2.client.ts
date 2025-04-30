import { TestClass } from "./removeProperty_exportDeclare_public.v2";

const testClass = new TestClass();
const res = testClass.testProperty;
testClass.testProperty = 2;
