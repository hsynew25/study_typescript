{
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // function tsAdd(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // function jsFetchNum(id: string): Promise<number> {
  //   //code...
  //   //code...
  //   //code...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // lastName: string | undefined => 값 없을 때 undefined를 무조건 전달해야함

  function printName(firstName: string, lastName?: string) {
    console.log(firstName, lastName);
  }

  // printName("sungyeun", "hong");
  // printName("sungyeun");
  // printName("sungyeun", undefined);

  function printMessage(message: string = "This is a default message.") {
    console.log(message);
  }

  // printMessage();

  function addNumber(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNumber(1, 2, 3));
  console.log(addNumber(1, 2, 3, 4, 5));
  console.log(addNumber(1, 3, 5, 7, 9));
}
