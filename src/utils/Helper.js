export function sleepAwait(ms) {
    return new Promise((res) => setTimeout(res, ms));
}

export const darkModeBackgroundColor = "gray.800";
export const lightModeContainerColor = "gray.100";
export const darkModeContainerColor = "gray.700";