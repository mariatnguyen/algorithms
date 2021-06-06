function binarySearch(arr, item, low, high) {
    if (low > high) {
        return null;
    }

    var mid = Math.ceil((low + high) / 2);

    if (arr[mid] === item) {
        return mid;
    }

    if (item < arr[mid]) {
        return binarySearch(arr, item, low, mid - 1);
    }

    else {
        return binarySearch(arr, item, mid + 1, high);
    }
}


//v2
function binarySearch(a, v) {
    function search(low, high) {
        if (low === high) {
            return a[low] === v;
        } else {
            var mid = math_floor((low + high) / 2);
            return (v === a[mid])
                ||
                (v < a[mid])
                ? search(low, mid - 1)
                : search(mid + 1, high);
        }
    }
    return search(0, array_length(a) - 1);
}