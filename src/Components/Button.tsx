export interface ButtonProps {
    text: string;
    onClick: () => void;
}

export const Button = ({ text, onClick }: ButtonProps) => {
    return (
        <button
            type="button"
            className="z-10 rounded-md shadow-sm px-6 py-2 text-lg font-semibold ml-3 w-auto caret-transparent"
            onClick={onClick}
        >
            {text}
        </button>
    )
}