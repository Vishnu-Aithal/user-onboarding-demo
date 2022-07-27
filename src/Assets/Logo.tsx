interface Props {
    height: string;
    width: string;
}
export const EdenLogo: React.FC<Props> = ({ height, width }) => (
    <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 83.000000 80.000000"
        preserveAspectRatio="xMidYMid meet">
        <metadata>
            Created by potrace 1.16, written by Peter Selinger 2001-2019
        </metadata>
        <g
            transform="translate(0.000000,80.000000) scale(0.100000,-0.100000)"
            fill="#664de5"
            stroke="none">
            <path
                d="M142 523 c5 -194 17 -232 93 -302 51 -47 92 -66 162 -76 50 -6 123
13 123 33 0 4 -14 21 -31 38 -46 43 -66 91 -83 193 -17 106 -45 161 -108 215
-35 31 -117 66 -151 66 -6 0 -8 -67 -5 -167z"
            />
            <path
                d="M519 491 c-23 -24 -29 -38 -29 -74 0 -59 29 -126 70 -160 17 -15 36
-27 40 -27 30 0 90 120 90 180 0 95 -106 146 -171 81z"
            />
        </g>
    </svg>
);
