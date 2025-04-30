import { TestClass } from "./changeState_export_publicStaticDeclare_To_protectedReadonlyStaticDeclare.v2";

const testClass = new TestClass();
const res = TestClass.testProperty;
TestClass.testProperty = 2;
