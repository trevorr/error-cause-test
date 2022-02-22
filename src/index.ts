import "error-cause/auto";

try {
  try {
    throw new Error("inner error");
  } catch (e) {
    throw new Error("outer error", { cause: e });
  }
} catch (e) {
  if (e instanceof Error) {
    console.log("Message:", e.message);
    if (e.cause instanceof Error) {
      console.log("Cause Message:", e.cause.message);
    }
  }
  console.log(e);
}
