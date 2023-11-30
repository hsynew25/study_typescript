{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  //서로 관련있는 데이터나 함수를 한 곳에 묶어둠
  //청사진
  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7; //1shot 당 필요한 커피빈 그람수 , static 붙이면 class level
    coffeeBeans: number = 0; // instance(object) level

    // 클래스를 가지고 object(instance)를 만들 때 항상 처음에 호출되는 함수
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      //static을 쓰면 Object를 생성하지 않고도 함수를 호출할 수 있다
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;

      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker);
  const maker2 = CoffeeMaker.makeMachine(3);
  console.log(maker2);
}
