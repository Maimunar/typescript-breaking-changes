import { TestClass } from "./changeState_exportDeclare_public_To_abstractDeclare.v1";

const testClass = new TestClass();
const res = testClass.testProperty;
testClass.testProperty = 2;
