const CheckIcon = () => {
  return (
    <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="on">
        <g id="Group 581">
          <circle id="Circle" cx="19.9998" cy="18.3338" r="18.3333" fill="#01DF85" />
          <path
            id="&#244;&#128;&#134;&#133;"
            d="M18.1589 26.8944C17.6082 26.8944 17.144 26.6623 16.7664 26.1982L11.9638 20.2155C11.8143 20.0346 11.7081 19.8615 11.6452 19.6963C11.5822 19.5232 11.5508 19.3462 11.5508 19.1653C11.5508 18.7641 11.6845 18.4337 11.952 18.1741C12.2195 17.9066 12.5617 17.7729 12.9786 17.7729C13.4427 17.7729 13.8321 17.9735 14.1468 18.3747L18.1117 23.4723L25.7817 11.271C25.9627 11.0035 26.1475 10.8147 26.3363 10.7046C26.5251 10.5866 26.7611 10.5276 27.0444 10.5276C27.4534 10.5276 27.7878 10.6574 28.0474 10.917C28.3148 11.1687 28.4486 11.4952 28.4486 11.8964C28.4486 12.0537 28.421 12.215 28.366 12.3802C28.3188 12.5454 28.2362 12.7185 28.1182 12.8994L19.5513 26.1628C19.2209 26.6505 18.7567 26.8944 18.1589 26.8944Z"
            fill="white"
          />
        </g>
      </g>
    </svg>
  );
};

const ConfirmUploadImage = () => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black opacity-90">
      <div className="flex flex-col items-center justify-center rounded-[20px] bg-white w-[313px] h-[420px]">
        <CheckIcon />
      </div>
    </div>
  );
};

export default ConfirmUploadImage;
