export function pushMultiple(string, count, array = []) {
    for(let i = 0; i < count; i++) {
        array.push(string);
    }
    return array;
}