type Combine = number | string
type CombineStrings = 'as-string' | 'as-number'

function combine(n1: Combine, n2: Combine, t: CombineStrings) {
    let result: number | string

    if (
        (typeof n1 === 'number' && typeof n2 === 'number') ||
        t === 'as-string'
    ) {
        result = n1 + n2
    } else {
        result = n1.toString() + n2.toString()
    }

    return result
}

combine(30, 50, 'as-number')

// no pues nada a lo q es nigger per pues quien lo tiene que decir

const FIXER_API_KEY
