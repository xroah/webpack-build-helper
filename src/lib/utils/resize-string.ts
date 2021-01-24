import padSpace from "./pad-space"

export = (str: string, length: number) => {
    const l = str.length

    if (l > length) {
        return str.substring(0, length + 1)
    }

    const restLen = length - l

    return padSpace(str, restLen)
}
