import type { Technology } from "../types/technology";

export const addTechnology = (
    stack: Technology[],
    technology: Technology
): Technology[] => {
    const exists = stack.some(
        (item) => item.id === technology.id
    );

    if (exists) {
        return stack;
    }

    return [...stack, technology];
};


export const removeTechnology = (
    stack: Technology[],
    id: number
): Technology[] => {
    return stack.filter(
        (technology) => technology.id !== id
    );
};


export const removeAllTechnologies = (): Technology[] => {
    return [];
};