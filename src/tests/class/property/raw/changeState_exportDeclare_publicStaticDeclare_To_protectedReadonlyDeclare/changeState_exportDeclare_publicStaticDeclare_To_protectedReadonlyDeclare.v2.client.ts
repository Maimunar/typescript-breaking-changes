import { TestClass } from "./changeState_exportDeclare_publicStaticDeclare_To_protectedReadonlyDeclare.v2";

const testClass = new TestClass();
const res = TestClass.testProperty;
TestClass.testProperty = 2;
