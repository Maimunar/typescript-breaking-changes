import { TestClass } from "./changeState_exportDeclare_publicStaticDeclare_To_protectedDeclare.v1";

const testClass = new TestClass();
const res = TestClass.testProperty;
TestClass.testProperty = 2;
