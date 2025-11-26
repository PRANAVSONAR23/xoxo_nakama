// global Nakama runtime variable declarations

declare var moduleName: string;

declare var rpcReward: nkruntime.RpcFunction;
declare var rpcFindMatch: nkruntime.RpcFunction;

// Match handlers
declare var matchInit: nkruntime.MatchInitFunction<State>;
declare var matchJoinAttempt: nkruntime.MatchJoinAttemptFunction<State>;
declare var matchJoin: nkruntime.MatchJoinFunction<State>;
declare var matchLeave: nkruntime.MatchLeaveFunction<State>;
declare var matchLoop: nkruntime.MatchLoopFunction<State>;
declare var matchTerminate: nkruntime.MatchTerminateFunction<State>;
declare var matchSignal: nkruntime.MatchSignalFunction<State>;

// The InitModule entrypoint required by Nakama
declare var InitModule: nkruntime.InitModule;

// Extra interfaces you use in TS
declare interface MatchLabel {
    open: number;
    fast: number;
}

declare interface State {
    label: MatchLabel;
    emptyTicks: number;
    presences: { [userId: string]: nkruntime.Presence | null };
    joinsInProgress: number;
    playing: boolean;
    board: Board;
    marks: { [userId: string]: Mark | null };
    mark: Mark;
    deadlineRemainingTicks: number;
    winner: Mark | null;
    winnerPositions: BoardPosition[] | null;
    nextGameRemainingTicks: number;
}
