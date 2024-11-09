const CustomButton = ({ title, handlePress, containerStyles, textStyles }) => {
    return (
        <button
            onPress={handlePress}
            className={`bg-transparent flex flex-row justify-center items-center  rounded-[50px] border-solid border-[5px] border-[#055532] pl-[120px] pr-[120px] pt-[15px] pb-[15px] ml-auto mr-auto ${containerStyles}`}
        >
            <span className={`text-[25px] font-inter font-bold ${textStyles} text-[#055532]`}>
                {title}
            </span>
        </button>
    );
};

export default CustomButton;