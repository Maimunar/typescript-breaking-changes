import { TestClass } from "./removeProperty_exportDeclare_publicStaticDeclare.v2";

const testClass = new TestClass();
const res = TestClass.testProperty;
TestClass.testProperty = 2;
