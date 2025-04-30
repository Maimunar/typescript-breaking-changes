import { TestClass } from "./RemoveGetter_export_publicStatic.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const res = TestClass.testGetter;
