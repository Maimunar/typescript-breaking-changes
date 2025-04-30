import { TestClass } from "./changeState_export_publicDeclare_To_publicAbstract.v2";

const testClass = new TestClass();
const res = testClass.testProperty;
testClass.testProperty = 2;
