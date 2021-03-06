import { Readable } from "svelte/store";

export const store: Readable<{
    letters: Iterable<[number, {
        char: string,
        x: number,
        y: number,        
    }]>
    fps: number,
    second: number,
    count: number,
}>;
