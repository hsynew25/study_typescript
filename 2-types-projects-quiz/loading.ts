{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(states: ResourceLoadState) {
    const state = states?.state;
    if (state == "loading") {
      console.log("👀 loading...");
    } else if (state == "success") {
      console.log("😃 loaded");
    } else if (state == "fail") {
      console.log("😱 no network");
    } else {
      throw new Error("unknown state");
    }
    return;
  }

  printLoginState({ state: "loading" }); // 👀 loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState({ state: "fail", reason: "no network" }); // 😱 no network
}
