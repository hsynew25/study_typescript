{
  // Array 정의
  const fruits: string[] = ["🍓", "🍊", "🍌", "🍎"]; //=> 이렇게 해야 readonly 사용 가능
  const numbers: Array<number> = [1, 2, 3];

  function printArray(fruits: readonly string[]) {}

  // tuple => 별로 추천 안함
  // 웬만하면 interface, type alias, class로 대체
  let student: [string, number];
  student = ["name", 27];
  student[0]; //name
  student[1]; //age

  const [name, age] = student;
}
