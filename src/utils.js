export function dict(arr) {
    return arr.reduce(
        (acc, item) => ({ ...acc, [item.id]: item }),
        {}
    );
}