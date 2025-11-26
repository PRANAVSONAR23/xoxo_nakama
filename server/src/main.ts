import "./match_handler";
import "./match_rpc";
import "./daily_rewards";
import "./types"
var moduleName = (globalThis as any).moduleName ?? "your_match_module_name";

(globalThis as any).InitModule = function (
  ctx: nkruntime.Context,
  logger: nkruntime.Logger,
  nk: nkruntime.Nakama,
  initializer: nkruntime.Initializer
) {
  initializer.registerMatch(moduleName, {
    matchInit: (globalThis as any).matchInit,
    matchJoinAttempt: (globalThis as any).matchJoinAttempt,
    matchJoin: (globalThis as any).matchJoin,
    matchLeave: (globalThis as any).matchLeave,
    matchLoop: (globalThis as any).matchLoop,
    matchTerminate: (globalThis as any).matchTerminate,
    matchSignal: (globalThis as any).matchSignal,
  });

  initializer.registerRpc("find_match_js", (globalThis as any).rpcFindMatch);
  initializer.registerRpc("rewards_js", (globalThis as any).rpcReward);

  logger.info("JavaScript logic loaded.");
};
