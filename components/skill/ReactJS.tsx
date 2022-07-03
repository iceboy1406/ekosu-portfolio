import React, { FC } from 'react'
interface ReactJSProps {
    className?: string
}
const ReactJS: FC<ReactJSProps> = ({ className }) => {
    return (
        <svg
            width="72"
            height="64"
            viewBox="0 0 72 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <title>React JS</title>
            <path
                d="M72 32.0073C72 27.2465 66.0269 22.7347 56.8691 19.9368C58.9825 10.6203 58.0432 3.20806 53.9046 0.834973C52.9507 0.278324 51.8353 0.0146484 50.6172 0.0146484V3.2813C51.2923 3.2813 51.8353 3.41314 52.2903 3.66216C54.2862 4.80476 55.1521 9.15541 54.477 14.7512C54.3155 16.1282 54.0514 17.5784 53.7285 19.0579C50.852 18.3548 47.7114 17.8128 44.4093 17.4612C42.428 14.7512 40.3734 12.2902 38.3041 10.1369C43.0885 5.69833 47.5793 3.26665 50.6319 3.26665V0C46.596 0 41.3127 2.87114 35.9706 7.85168C30.6286 2.90044 25.3453 0.0585949 21.3094 0.0585949V3.32525C24.3473 3.32525 28.8528 5.74227 33.6372 10.1515C31.5826 12.3049 29.5279 14.7512 27.576 17.4612C24.2593 17.8128 21.1186 18.3548 18.2422 19.0726C17.9046 17.6077 17.6551 16.1868 17.479 14.8244C16.7892 9.22865 17.6404 4.878 19.6217 3.72076C20.062 3.45708 20.6343 3.33989 21.3094 3.33989V0.0732433C20.0766 0.0732433 18.9613 0.336919 17.9927 0.893568C13.8687 3.26665 12.9441 10.6642 15.0722 19.9515C5.94374 22.764 0 27.2612 0 32.0073C0 36.7681 5.97309 41.2799 15.1309 44.0778C13.0175 53.3944 13.9568 60.8066 18.0954 63.1797C19.0493 63.7363 20.1647 64 21.3975 64C25.4333 64 30.7167 61.1289 36.0587 56.1483C41.4007 61.0996 46.6841 63.9414 50.7199 63.9414C51.9527 63.9414 53.0681 63.6777 54.0367 63.1211C58.1606 60.748 59.0852 53.3504 56.9572 44.0632C66.0563 41.2653 72 36.7535 72 32.0073ZM52.892 22.2367C52.349 24.1263 51.6739 26.0746 50.9107 28.0229C50.309 26.851 49.6779 25.6791 48.9882 24.5072C48.3131 23.3353 47.594 22.1927 46.8749 21.0794C48.9588 21.387 50.9694 21.7679 52.892 22.2367ZM46.1704 37.8375C45.0257 39.8151 43.8516 41.6901 42.6335 43.4333C40.4468 43.6237 38.2307 43.7262 36 43.7262C33.7839 43.7262 31.5679 43.6237 29.3958 43.4479C28.1777 41.7047 26.989 39.8444 25.8443 37.8814C24.7289 35.9625 23.7163 34.0142 22.7917 32.0513C23.7016 30.0883 24.7289 28.1254 25.8296 26.2065C26.9743 24.2289 28.1484 22.3539 29.3665 20.6107C31.5532 20.4202 33.7693 20.3177 36 20.3177C38.2161 20.3177 40.4321 20.4202 42.6042 20.596C43.8223 22.3392 45.011 24.1996 46.1557 26.1625C47.2711 28.0815 48.2837 30.0298 49.2083 31.9927C48.2837 33.9556 47.2711 35.9185 46.1704 37.8375ZM50.9107 35.9332C51.7032 37.8961 52.3783 39.859 52.936 41.7633C51.0135 42.2321 48.9882 42.6276 46.8895 42.9352C47.6086 41.8073 48.3278 40.65 49.0029 39.4635C49.678 38.2916 50.309 37.1051 50.9107 35.9332ZM36.0294 51.5633C34.6645 50.157 33.2996 48.5896 31.9495 46.8757C33.2703 46.9343 34.6205 46.9783 35.9853 46.9783C37.3649 46.9783 38.7297 46.949 40.0652 46.8757C38.7444 48.5896 37.3795 50.157 36.0294 51.5633ZM25.1105 42.9352C23.0265 42.6276 21.0159 42.2467 19.0934 41.778C19.6364 39.8883 20.3115 37.94 21.0746 35.9918C21.6763 37.1637 22.3074 38.3355 22.9971 39.5074C23.6869 40.6793 24.3914 41.8219 25.1105 42.9352ZM35.956 12.4514C37.3208 13.8576 38.6857 15.425 40.0359 17.1389C38.715 17.0803 37.3649 17.0364 36 17.0364C34.6205 17.0364 33.2556 17.0657 31.9201 17.1389C33.2409 15.425 34.6058 13.8576 35.956 12.4514ZM25.0958 21.0794C24.3767 22.2074 23.6576 23.3646 22.9825 24.5512C22.3074 25.723 21.6763 26.8949 21.0746 28.0668C20.2821 26.1039 19.607 24.141 19.0493 22.2367C20.9719 21.7826 22.9972 21.387 25.0958 21.0794ZM11.8141 39.4195C6.61884 37.2076 3.25805 34.3072 3.25805 32.0073C3.25805 29.7075 6.61884 26.7924 11.8141 24.5951C13.0762 24.0531 14.4558 23.5697 15.8793 23.1156C16.7159 25.9867 17.8166 28.975 19.1814 32.0366C17.8312 35.0835 16.7452 38.0572 15.9234 40.9137C14.4704 40.4596 13.0909 39.9615 11.8141 39.4195ZM19.7097 60.3525C17.7138 59.2099 16.8479 54.8592 17.523 49.2634C17.6845 47.8865 17.9486 46.4362 18.2715 44.9567C21.148 45.6599 24.2886 46.2019 27.5907 46.5534C29.572 49.2634 31.6266 51.7244 33.6959 53.8778C28.9115 58.3163 24.4207 60.748 21.3681 60.748C20.7077 60.7333 20.15 60.6015 19.7097 60.3525ZM54.521 49.1902C55.2108 54.786 54.3596 59.1366 52.3783 60.2939C51.938 60.5576 51.3657 60.6748 50.6906 60.6748C47.6527 60.6748 43.1472 58.2577 38.3628 53.8485C40.4175 51.6951 42.4721 49.2488 44.424 46.5388C47.7407 46.1872 50.8814 45.6452 53.7578 44.9274C54.0954 46.407 54.3596 47.8279 54.521 49.1902ZM60.1712 39.4195C58.9091 39.9615 57.5296 40.445 56.106 40.8991C55.2695 38.0279 54.1688 35.0396 52.8039 31.978C54.1541 28.9311 55.2401 25.9574 56.062 23.1009C57.5149 23.555 58.8944 24.0531 60.1859 24.5951C65.3812 26.807 68.7419 29.7075 68.7419 32.0073C68.7273 34.3072 65.3665 37.2222 60.1712 39.4195Z"
                fill="#61DAFB"
            />
            <path
                d="M35.9951 36.3405C38.4534 36.3405 40.4463 34.347 40.4463 31.888C40.4463 29.4289 38.4534 27.4354 35.9951 27.4354C33.5368 27.4354 31.544 29.4289 31.544 31.888C31.544 34.347 33.5368 36.3405 35.9951 36.3405Z"
                fill="#61DAFB"
            />
        </svg>
    )
}

export default ReactJS
