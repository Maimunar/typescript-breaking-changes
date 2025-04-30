import { TestClass } from "./changeState_export_publicStaticAbstract_To_public.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
