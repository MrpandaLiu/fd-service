import { VueConstructor } from "vue";
import FdButton from "./fd-button";

export declare interface BurningUI {
    install: (Vue: { component: (arg0: string, arg1: VueConstructor<Vue>) => void; }) => void;
    FdButton: VueConstructor<FdButton>;
}