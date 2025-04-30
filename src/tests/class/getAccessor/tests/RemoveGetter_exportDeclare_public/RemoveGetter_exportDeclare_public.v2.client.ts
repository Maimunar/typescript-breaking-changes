import { TestClass } from "./RemoveGetter_exportDeclare_public.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const res = testClass.testGetter;
