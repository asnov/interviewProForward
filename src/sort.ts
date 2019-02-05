import arrayToSort from './to-sort';


function quicksort(A: number[], lo: number, hi: number) {
    if (lo < hi) {
        const p = partition(A, lo, hi);
        quicksort(A, lo, p - 1);
        quicksort(A, p + 1, hi);
    }
}

function partition(A: number[], lo: number, hi: number): number {
    const pivot = A[hi];
    let i = lo;
    for (let j = lo; j < hi - 1; j++) {
        if (A[j] < pivot) {
            // [A[i],]
            const swap = A[i];
            A[i] = A[j];
            A[j] = swap;
            i = i + 1;
        }
    }
    const swap = A[hi];
    A[hi] = A[i];
    A[i] = swap;
    return i;
}


function sort(A: number[], last: number) {
    const n = A.length;
    if (n === 1) {
        return A;
    }
    for (let i = 0; i < last; i++) {
        if (A[i] > A[last]) {
            const swap = A[i];
            A[i] = A[last];
            A[last] = swap;
        }
    }

}

console.log(arrayToSort);

quicksort(arrayToSort, 0, arrayToSort.length - 1);
// sort();

console.log(arrayToSort);
