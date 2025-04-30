import { TestClass } from "./changeState_exportDeclare_publicDeclare_To_protectedReadonlyAbstract.v2";

const testClass = new TestClass();
const res = testClass.testProperty;
testClass.testProperty = 2;
