const CustomButton = ({ title, handlePress, containerStyles, textStyles }) => {
    return (
        <button
            onClick={handlePress}
            className={`bg-transparent flex flex-row justify-center items-center  rounded-[50px] border-solid border-[5px] border-[#055532] ${containerStyles}`}
        >
            <span className={`text-[25px] font-inter font-bold text-[#055532] ${textStyles} `}>
                {title}
            </span>
        </button>
    );
};

export default CustomButton;