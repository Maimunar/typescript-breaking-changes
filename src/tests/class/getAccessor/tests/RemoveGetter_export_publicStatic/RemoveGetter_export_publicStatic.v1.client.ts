import { TestClass } from "./RemoveGetter_export_publicStatic.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const res = TestClass.testGetter;
