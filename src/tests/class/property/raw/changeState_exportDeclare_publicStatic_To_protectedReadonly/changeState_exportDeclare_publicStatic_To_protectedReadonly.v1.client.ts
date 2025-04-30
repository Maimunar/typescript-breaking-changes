import { TestClass } from "./changeState_exportDeclare_publicStatic_To_protectedReadonly.v1";

const testClass = new TestClass();
const res = TestClass.testProperty;
TestClass.testProperty = 2;
