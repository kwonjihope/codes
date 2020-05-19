function times(a,b){
    function double(x)
    {
        return x * 2;
    }
    function halve(x)
    {
        return x / 2;
    }
    function is_even(b)
    {
        return b % 2 === 0;
    }
    return b === 0
    ? 0
    : is_even(b)
    ? times(double(a), halve(b))
    : a + times(a, b - 1);
}

// initialiser
function smallest_divisor(n)
{
    return find_divisor(n, 2);
}

function find_divisor(n, test_divisor)
{
    return square(test_divisor) > n
    ? n
    : divides(n, test_divisor)
        ? test_divisor
        : find_divisor(n, test_divisor + 1);
}

function square(x)
{
    return x * x;
}

function divides(a, b)
{
    return a % b === 0;
}

smallest_divisor(19999);
