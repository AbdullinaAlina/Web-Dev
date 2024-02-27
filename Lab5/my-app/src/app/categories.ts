export interface Category {
    name: string;
    id: number;
    isSelected: boolean;
}

export const categories = [
    {
        name: "Очищение",
        id: 1,
        isSelected: false,
    },
    {
        name: "Крема и сыворотки",
        id: 2,
        isSelected: false,
    },
    {
        name: "Тонеры и мисты",
        id: 3,
        isSelected: false,
    },
    {
        name: "Маски и пэды",
        id: 4,
        isSelected: false,
    },
]