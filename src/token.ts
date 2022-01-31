import { readFile, readFileSync } from "fs";

export class Token {

    Token() { }

    static token(): string {
        return readFileSync('.token', 'utf-8');
    }
}
