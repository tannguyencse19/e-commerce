export function sleepAwait(ms) {
    return new Promise((res) => setTimeout(res, ms));
}

export const darkModeColor = "var(--chakra-colors-gray-800)";