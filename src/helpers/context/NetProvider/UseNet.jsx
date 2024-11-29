import { useContext } from "react";
import { NetContext } from "./NetProvider";

export function useNet() {
    return useContext(NetContext);
}