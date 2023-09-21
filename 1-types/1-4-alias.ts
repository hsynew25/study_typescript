{
  /**
   * Type aliases
   */

  type Text = string;
  const name: Text = "sungyeun";
  const address: Text = "korea";
  type Num = number;
  const age: Num = 27;

  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: "sungyeun",
    age: 28,
  };

  /**
   * String literal Types
   */

  type Name = "name";
  let hongsName: Name;
  hongsName = "name";

  type Bool = true;
  let isCat: Bool;
  isCat = true;
}
