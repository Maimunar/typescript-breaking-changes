import { TestClass } from "./removeProperty_exportDeclare_publicDeclare.v1";

const testClass = new TestClass();
const res = testClass.testProperty;
testClass.testProperty = 2;
