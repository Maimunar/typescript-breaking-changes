import { TestClass } from "./changeState_export_publicStaticDeclare_To_abstract.v1";

const testClass = new TestClass();
const res = TestClass.testProperty;
TestClass.testProperty = 2;
