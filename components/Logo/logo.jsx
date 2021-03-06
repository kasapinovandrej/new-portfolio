import React from "react";
import { useRouter } from "next/router";
import classes from "./logo.module.scss";

const Logo = (props) => {
  const route = useRouter();
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="100.000000pt"
      height="65.000000pt"
      viewBox="0 0 100.000000 65.000000"
      preserveAspectRatio="xMidYMid meet"
      onClick={() => route.push("/")}
      className={classes[props.type]}
    >
      <metadata>
        Created by potrace 1.10, written by Peter Selinger 2001-2011
      </metadata>
      <g
        transform="translate(0.000000,65.000000) scale(0.050000,-0.050000)"
        fill={props.color || "#fff"}
        stroke="none"
      >
        <path
          d="M646 1155 c-66 -80 -166 -213 -223 -296 -96 -143 -108 -153 -218
-186 -143 -43 -212 -92 -194 -139 15 -39 73 -44 132 -12 60 31 64 12 16 -70
-35 -59 -39 -78 -19 -102 38 -46 48 -39 162 100 109 135 281 200 251 95 -65
-226 -77 -478 -25 -516 52 -38 72 -20 73 67 0 83 68 440 87 458 24 24 176 -63
203 -116 16 -30 48 -61 71 -69 40 -12 42 -23 32 -139 -10 -105 -6 -131 24
-158 70 -64 93 -41 124 123 l29 155 115 -4 c99 -3 199 -23 389 -78 68 -19 55
26 -20 72 -72 44 -219 91 -350 112 -128 20 -122 29 119 187 225 148 516 411
516 466 0 101 -55 82 -345 -121 -312 -218 -326 -220 -246 -19 62 156 63 167 7
197 -78 42 -216 -167 -275 -417 -35 -146 -195 -282 -229 -194 -6 17 -43 44
-82 60 -38 16 -70 32 -70 35 0 3 40 131 90 285 103 323 99 297 59 338 -53 52
-78 37 -203 -114z m-45 -393 c-17 -61 -33 -82 -62 -82 -51 0 -49 16 13 107 63
92 78 84 49 -25z"
        />
      </g>
    </svg>
  );
};

export default Logo;
