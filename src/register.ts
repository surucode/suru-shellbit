import { Suru } from "@surucode/suru-core";
import { ShellBit, ShellBitArgs } from "./bit/ShellBit";

const suru = Suru.registerBit("shell", ShellBit);
(<any>suru.bits.shell).args = ShellBitArgs;