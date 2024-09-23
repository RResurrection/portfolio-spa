"use client";

const DownloadButton = () => {
  const handleDownload = () => {
    window.location.href = "/api/dowloand";
  };

  return (
    <button
      className="bg-[#FD6F00] text-white text-[21px]  max-w-[188px] h-[50px] rounded-[5px] p-[20px] flex justify-center items-center"
      onClick={handleDownload}
    >
      Download CV
    </button>
  );
};

export default DownloadButton;
