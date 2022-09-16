export default function Button({ text }: { text: string; }) {
    return (
        <>
            <style jsx>
                {`
                button:hover {
                    background: rgba(37,161,142,0.9);
                    box-shadow: 0 6px 20px rgb(37 161 142 / 23%);
                }
                
                button {
                    margin: 0;
                    color: white;
                    box-shadow: 0 4px 14px 0 rgb(37 161 142 / 39%);
                    transition: background.2s ease,color.2s ease,box-shadow.2s ease;
                }
                `}
            </style>
            <button className="bg-green-100 rounded-lg btn flex items-center justify-center py-4 px-8 gap-2 select-none">{text}</button>
        </>
    );
}