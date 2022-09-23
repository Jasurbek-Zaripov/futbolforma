interface IButton {
    text: any;
    classname?: string;
    disable?: boolean;
}

export default function Button({ text, classname = '', disable }: IButton) {

    return (
        <>
            <button
                disabled={disable}
                className={`
            disabled:bg-mygreen-40 disabled:shadow-[0px_12px_24px_rgba(37,161,142,0.24)]
            bg-mygreen-80 hover:bg-mygreen-40
            shadow-[0px_12px_24px_rgba(37,161,142,0.30)] hover:shadow-[0px_12px_24px_rgba(37,161,142,0.24)]
            rounded-lg text-white
            transition-colors ease-in outline-0 outline-offset-0
            flex items-center justify-center 
            py-3 px-6 gap-2 select-none `+ classname}>{text}</button>
        </>
    );
}