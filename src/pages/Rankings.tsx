import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const rankingsData = [
  {
    name: "Bronze",
    icon: (
      <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_bronze)">
          <mask id="path-1-inside-1_2494_5965" fill="white">
            <path d="M2.625 3.365C2.625 2.47306 3.34806 1.75 4.24 1.75L30.76 1.75C31.6519 1.75 32.375 2.47306 32.375 3.365V19.075C32.375 26.9036 25.4333 33.25 17.5 33.25C9.56667 33.25 2.625 26.9036 2.625 19.075V3.365Z"/>
          </mask>
          <path d="M2.625 3.365C2.625 2.47306 3.34806 1.75 4.24 1.75L30.76 1.75C31.6519 1.75 32.375 2.47306 32.375 3.365V19.075C32.375 26.9036 25.4333 33.25 17.5 33.25C9.56667 33.25 2.625 26.9036 2.625 19.075V3.365Z" fill="url(#paint0_linear_bronze)"/>
          <path d="M32.375 3.365H30.675V19.075H32.375H34.075V3.365H32.375ZM2.625 19.075H4.325V3.365H2.625H0.925V19.075H2.625ZM17.5 33.25V31.55C10.406 31.55 4.325 25.8682 4.325 19.075H2.625H0.925C0.925 27.939 8.72731 34.95 17.5 34.95V33.25ZM32.375 19.075H30.675C30.675 25.8682 24.594 31.55 17.5 31.55V33.25V34.95C26.2727 34.95 34.075 27.939 34.075 19.075H32.375ZM4.24 1.75V3.45L30.76 3.45V1.75V0.0500008L4.24 0.05L4.24 1.75ZM2.625 3.365H4.325C4.325 3.41194 4.28694 3.45 4.24 3.45V1.75L4.24 0.05C2.40918 0.05 0.925 1.53418 0.925 3.365H2.625ZM32.375 3.365H34.075C34.075 1.53418 32.5908 0.0500009 30.76 0.0500008V1.75V3.45C30.7131 3.45 30.675 3.41195 30.675 3.365H32.375Z" fill="white" fillOpacity="0.4" mask="url(#path-1-inside-1_2494_5965)"/>
        </g>
        <path d="M17.2422 14.6816C17.3498 14.4727 17.6486 14.4727 17.7563 14.6816L18.4405 16.0091C18.468 16.0625 18.5116 16.1061 18.5651 16.1336L19.8925 16.8178C20.1015 16.9255 20.1015 17.2243 19.8925 17.332L18.5651 18.0162C18.5116 18.0437 18.468 18.0873 18.4405 18.1407L17.7563 19.4682C17.6486 19.6771 17.3498 19.6771 17.2422 19.4682L16.5579 18.1407C16.5304 18.0873 16.4868 18.0437 16.4334 18.0162L15.1059 17.332C14.897 17.2243 14.897 16.9255 15.1059 16.8178L16.4334 16.1336C16.4868 16.1061 16.5304 16.0625 16.5579 16.0091L17.2422 14.6816Z" fill="white"/>
        <path d="M16.9199 14.396C17.2011 14.0013 17.7981 14.0011 18.0791 14.396L18.1338 14.4868L18.7988 15.7759L20.0869 16.4399C20.6029 16.7059 20.6029 17.4435 20.0869 17.7095L18.7979 18.3735L18.1338 19.6626C17.8678 20.1786 17.1302 20.1786 16.8643 19.6626L16.2002 18.3745L14.9111 17.7095C14.3953 17.4434 14.3952 16.7059 14.9111 16.4399L16.2002 15.7759L16.8643 14.4868L16.9199 14.396Z" stroke="black" strokeOpacity="0.16" strokeWidth="0.85"/>
        <path d="M36.1885 2.05859C37.2378 2.05859 38.0889 2.90964 38.0889 3.95898V11.8223L12.668 37.2422C8.84634 35.3416 5.77283 32.1301 4.21094 28.2305L30.3828 2.05859H36.1885Z" fill="white" fillOpacity="0.32"/>
        <defs>
          <filter id="filter0_d_bronze" x="2.625" y="1.75" width="29.75" height="32.3075" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="0.8075"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.24 0 0 0 0 0.118652 0 0 0 0 0 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2494_5965"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2494_5965" result="shape"/>
          </filter>
          <clipPath id="paint1_angular_2494_5965_clip_path"><path d="M17.2422 14.6816C17.3498 14.4727 17.6486 14.4727 17.7563 14.6816L18.4405 16.0091C18.468 16.0625 18.5116 16.1061 18.5651 16.1336L19.8925 16.8178C20.1015 16.9255 20.1015 17.2243 19.8925 17.332L18.5651 18.0162C18.5116 18.0437 18.468 18.0873 18.4405 18.1407L17.7563 19.4682C17.6486 19.6771 17.3498 19.6771 17.2422 19.4682L16.5579 18.1407C16.5304 18.0873 16.4868 18.0437 16.4334 18.0162L15.1059 17.332C14.897 17.2243 14.897 16.9255 15.1059 16.8178L16.4334 16.1336C16.4868 16.1061 16.5304 16.0625 16.5579 16.0091L17.2422 14.6816Z"/></clipPath>
          <clipPath id="paint2_angular_2494_5965_clip_path"><path d="M17.2422 14.6816C17.3498 14.4727 17.6486 14.4727 17.7563 14.6816L18.4405 16.0091C18.468 16.0625 18.5116 16.1061 18.5651 16.1336L19.8925 16.8178C20.1015 16.9255 20.1015 17.2243 19.8925 17.332L18.5651 18.0162C18.5116 18.0437 18.468 18.0873 18.4405 18.1407L17.7563 19.4682C17.6486 19.6771 17.3498 19.6771 17.2422 19.4682L16.5579 18.1407C16.5304 18.0873 16.4868 18.0437 16.4334 18.0162L15.1059 17.332C14.897 17.2243 14.897 16.9255 15.1059 16.8178L16.4334 16.1336C16.4868 16.1061 16.5304 16.0625 16.5579 16.0091L17.2422 14.6816Z"/></clipPath>
          <linearGradient id="paint0_linear_bronze" x1="17.4998" y1="39.6035" x2="17.4998" y2="2.14377" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8C4500"/>
            <stop offset="1" stopColor="#D1A66E"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    description: "Basic access to the app's services, light discounts and introductory rewards.",
    benefits: [
      "you get up to up to $100 reimbursements covered per event",
      "$50 per appointment,",
      "10% of first month, revenue closed deals."
    ]
  },
  {
    name: "Silver",
    icon: (
      <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_silver)">
          <path d="M21.9958 33.1378C19.5128 35.6207 15.4872 35.6207 13.0042 33.1378L1.8622 21.9958C-0.620735 19.5128 -0.620735 15.4872 1.8622 13.0042L13.0042 1.8622C15.4872 -0.620735 19.5128 -0.620735 21.9958 1.8622L33.1378 13.0042C35.6207 15.4872 35.6207 19.5128 33.1378 21.9958L21.9958 33.1378Z" fill="url(#paint0_linear_silver)"/>
          <path d="M13.7109 2.56934C15.8034 0.476921 19.1966 0.476921 21.2891 2.56934L32.4307 13.7109C34.5231 15.8034 34.5231 19.1966 32.4307 21.2891L21.2891 32.4307C19.1966 34.5231 15.8034 34.5231 13.7109 32.4307L2.56934 21.2891C0.476921 19.1966 0.476921 15.8034 2.56934 13.7109L13.7109 2.56934Z" stroke="white" strokeOpacity="0.4" strokeWidth="2"/>
        </g>
        <path d="M17.6976 15.3846C17.8243 15.1387 18.1757 15.1387 18.3024 15.3846L19.1074 16.9463C19.1398 17.0092 19.191 17.0604 19.2539 17.0928L20.8156 17.8978C21.0615 18.0245 21.0615 18.3759 20.8156 18.5026L19.2539 19.3076C19.191 19.34 19.1398 19.3912 19.1074 19.4541L18.3024 21.0158C18.1757 21.2616 17.8243 21.2616 17.6976 21.0158L16.8926 19.4541C16.8602 19.3912 16.809 19.34 16.7461 19.3076L15.1844 18.5026C14.9385 18.3759 14.9385 18.0245 15.1844 17.8978L16.7461 17.0928C16.809 17.0604 16.8602 17.0092 16.8926 16.9463L17.6976 15.3846Z" fill="white"/>
        <path d="M17.3184 15.0488C17.6491 14.5842 18.3509 14.5842 18.6816 15.0488L18.7471 15.1553L19.5283 16.6709L21.0449 17.4531C21.6519 17.766 21.6519 18.6344 21.0449 18.9473L19.5283 19.7285L18.7471 21.2451C18.4342 21.8521 17.5658 21.8521 17.2529 21.2451L16.4707 19.7285L14.9551 18.9473C14.3481 18.6344 14.3481 17.766 14.9551 17.4531L16.4707 16.6709L17.2529 15.1553L17.3184 15.0488Z" stroke="black" strokeOpacity="0.16"/>
        <path d="M31.2783 11.145L11.1445 31.2788L3.7207 23.854L23.8535 3.72119L31.2783 11.145Z" fill="url(#paint3_linear_silver)" fillOpacity="0.32"/>
        <defs>
          <filter id="filter0_d_silver" x="0" y="0" width="35" height="36" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.117138 0 0 0 0 0.176258 0 0 0 0 0.202862 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_silver"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_silver" result="shape"/>
          </filter>
          <clipPath id="paint1_angular_silver_clip_path"><path d="M17.6976 15.3846C17.8243 15.1387 18.1757 15.1387 18.3024 15.3846L19.1074 16.9463C19.1398 17.0092 19.191 17.0604 19.2539 17.0928L20.8156 17.8978C21.0615 18.0245 21.0615 18.3759 20.8156 18.5026L19.2539 19.3076C19.191 19.34 19.1398 19.3912 19.1074 19.4541L18.3024 21.0158C18.1757 21.2616 17.8243 21.2616 17.6976 21.0158L16.8926 19.4541C16.8602 19.3912 16.809 19.34 16.7461 19.3076L15.1844 18.5026C14.9385 18.3759 14.9385 18.0245 15.1844 17.8978L16.7461 17.0928C16.809 17.0604 16.8602 17.0092 16.8926 16.9463L17.6976 15.3846Z"/></clipPath>
          <clipPath id="paint2_angular_silver_clip_path"><path d="M17.6976 15.3846C17.8243 15.1387 18.1757 15.1387 18.3024 15.3846L19.1074 16.9463C19.1398 17.0092 19.191 17.0604 19.2539 17.0928L20.8156 17.8978C21.0615 18.0245 21.0615 18.3759 20.8156 18.5026L19.2539 19.3076C19.191 19.34 19.1398 19.3912 19.1074 19.4541L18.3024 21.0158C18.1757 21.2616 17.8243 21.2616 17.6976 21.0158L16.8926 19.4541C16.8602 19.3912 16.809 19.34 16.7461 19.3076L15.1844 18.5026C14.9385 18.3759 14.9385 18.0245 15.1844 17.8978L16.7461 17.0928C16.809 17.0604 16.8602 17.0092 16.8926 16.9463L17.6976 15.3846Z"/></clipPath>
          <linearGradient id="paint0_linear_silver" x1="17.4999" y1="37.6336" x2="17.4999" y2="-2.6335" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8AA8B5"/>
            <stop offset="1" stopColor="#DCE5E8"/>
          </linearGradient>
          <linearGradient id="paint3_linear_silver" x1="27.2301" y1="1.12288" x2="0.288689" y2="32.4921" gradientUnits="userSpaceOnUse">
            <stop offset="0.125287" stopColor="white" stopOpacity="0"/>
            <stop offset="0.195" stopColor="white"/>
            <stop offset="0.375692" stopColor="white"/>
            <stop offset="0.495" stopColor="white"/>
            <stop offset="0.929467" stopColor="white" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    description: "This activates when you book 10 qualified appointments.",
    benefits: [
      "you get up to up to $75 per appointment and everything in bronze"
    ]
  },
  {
    name: "Gold",
    icon: (
      <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_gold)">
          <path d="M21.1494 32.9017C18.9733 34.5328 16.0267 34.5328 13.8506 32.9017L3.43477 25.0946C1.25867 23.4635 0.348109 20.5723 1.1793 17.9332L5.15779 5.30098C5.98898 2.66183 8.37287 0.875 11.0627 0.875H23.9373C26.6271 0.875 29.011 2.66184 29.8422 5.30098L33.8207 17.9332C34.6519 20.5723 33.7413 23.4635 31.5652 25.0946L21.1494 32.9017Z" fill="url(#paint0_linear_gold)"/>
          <path d="M11.0625 1.875H23.9375C26.1736 1.87508 28.1835 3.36241 28.8887 5.60156L32.8672 18.2334C33.5738 20.4771 32.794 22.9233 30.9658 24.2939L20.5498 32.1016C18.7292 33.4662 16.2708 33.4662 14.4502 32.1016L4.03418 24.2939C2.20598 22.9233 1.42615 20.4771 2.13281 18.2334L6.11133 5.60156C6.81655 3.36241 8.82636 1.87508 11.0625 1.875Z" stroke="white" strokeOpacity="0.4" strokeWidth="2"/>
        </g>
        <path d="M17.6976 14.9842C17.8243 14.7384 18.1757 14.7384 18.3024 14.9842L19.1074 16.5459C19.1398 16.6088 19.191 16.66 19.2539 16.6924L20.8156 17.4974C21.0615 17.6241 21.0615 17.9755 20.8156 18.1022L19.2539 18.9072C19.191 18.9396 19.1398 18.9908 19.1074 19.0537L18.3024 20.6154C18.1757 20.8613 17.8243 20.8613 17.6976 20.6154L16.8926 19.0537C16.8602 18.9908 16.809 18.9396 16.7461 18.9072L15.1844 18.1022C14.9385 17.9755 14.9385 17.6241 15.1844 17.4974L16.7461 16.6924C16.809 16.66 16.8602 16.6088 16.8926 16.5459L17.6976 14.9842Z" fill="white"/>
        <path d="M17.3184 14.6484C17.6491 14.1838 18.3509 14.1838 18.6816 14.6484L18.7471 14.7549L19.5283 16.2705L21.0449 17.0527C21.6519 17.3656 21.6519 18.234 21.0449 18.5469L19.5283 19.3281L18.7471 20.8447C18.4342 21.4517 17.5658 21.4517 17.2529 20.8447L16.4707 19.3281L14.9551 18.5469C14.3481 18.234 14.3481 17.3656 14.9551 17.0527L16.4707 16.2705L17.2529 14.7549L17.3184 14.6484Z" stroke="black" strokeOpacity="0.16"/>
        <path d="M27.2627 1.87207C28.455 2.65236 29.3857 3.84653 29.8438 5.30078L31.9609 12.0225L12.2686 31.7148L3.78125 25.3535L27.2627 1.87207Z" fill="white" fillOpacity="0.32"/>
        <defs>
          <filter id="filter0_d_gold" x="0.875" y="0.875" width="33.25" height="34.25" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.300741 0 0 0 0 0.171852 0 0 0 0 0.0192593 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_gold"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_gold" result="shape"/>
          </filter>
          <clipPath id="paint1_angular_gold_clip_path"><path d="M17.6976 14.9842C17.8243 14.7384 18.1757 14.7384 18.3024 14.9842L19.1074 16.5459C19.1398 16.6088 19.191 16.66 19.2539 16.6924L20.8156 17.4974C21.0615 17.6241 21.0615 17.9755 20.8156 18.1022L19.2539 18.9072C19.191 18.9396 19.1398 18.9908 19.1074 19.0537L18.3024 20.6154C18.1757 20.8613 17.8243 20.8613 17.6976 20.6154L16.8926 19.0537C16.8602 18.9908 16.809 18.9396 16.7461 18.9072L15.1844 18.1022C14.9385 17.9755 14.9385 17.6241 15.1844 17.4974L16.7461 16.6924C16.809 16.66 16.8602 16.6088 16.8926 16.5459L17.6976 14.9842Z"/></clipPath>
          <clipPath id="paint2_angular_gold_clip_path"><path d="M17.6976 14.9842C17.8243 14.7384 18.1757 14.7384 18.3024 14.9842L19.1074 16.5459C19.1398 16.6088 19.191 16.66 19.2539 16.6924L20.8156 17.4974C21.0615 17.6241 21.0615 17.9755 20.8156 18.1022L19.2539 18.9072C19.191 18.9396 19.1398 18.9908 19.1074 19.0537L18.3024 20.6154C18.1757 20.8613 17.8243 20.8613 17.6976 20.6154L16.8926 19.0537C16.8602 18.9908 16.809 18.9396 16.7461 18.9072L15.1844 18.1022C14.9385 17.9755 14.9385 17.6241 15.1844 17.4974L16.7461 16.6924C16.809 16.66 16.8602 16.6088 16.8926 16.5459L17.6976 14.9842Z"/></clipPath>
          <linearGradient id="paint0_linear_gold" x1="17.5004" y1="35.637" x2="17.5004" y2="-2.79499" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F07E00"/>
            <stop offset="1" stopColor="#F7F4CF"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    description: "This activates when you book 20-25 qualified appointments.",
    benefits: [
      "you get up to up to $100 per appointment and everything in silver"
    ]
  },
  {
    name: "Platinum",
    icon: (
      <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_platinum)">
          <path d="M20.5311 34.176C18.6554 35.2747 16.3446 35.2747 14.4689 34.176L4.78109 28.5012C2.90545 27.4026 1.75 25.3721 1.75 23.1748V11.8252C1.75 9.62789 2.90544 7.59744 4.78109 6.49876L14.4689 0.824011C16.3446 -0.27467 18.6554 -0.27467 20.5311 0.82401L30.2189 6.49876C32.0946 7.59744 33.25 9.62789 33.25 11.8252V23.1748C33.25 25.3721 32.0946 27.4026 30.2189 28.5012L20.5311 34.176Z" fill="url(#paint0_linear_platinum)"/>
          <path d="M14.9746 1.68652C16.5379 0.770964 18.4621 0.770963 20.0254 1.68652L29.7139 7.36133C31.279 8.27818 32.25 9.97817 32.25 11.8252V23.1748C32.25 25.0218 31.279 26.7218 29.7139 27.6387L20.0254 33.3135C18.4621 34.229 16.5379 34.229 14.9746 33.3135L5.28613 27.6387C3.72103 26.7218 2.75002 25.0218 2.75 23.1748V11.8252L2.76172 11.4805C2.87427 9.76861 3.81894 8.22083 5.28613 7.36133L14.9746 1.68652Z" stroke="white" strokeOpacity="0.4" strokeWidth="2"/>
        </g>
        <path d="M17.6976 15.3846C17.8243 15.1387 18.1757 15.1387 18.3024 15.3846L19.1074 16.9463C19.1398 17.0092 19.191 17.0604 19.2539 17.0928L20.8156 17.8978C21.0615 18.0245 21.0615 18.3759 20.8156 18.5026L19.2539 19.3076C19.191 19.34 19.1398 19.3912 19.1074 19.4541L18.3024 21.0158C18.1757 21.2616 17.8243 21.2616 17.6976 21.0158L16.8926 19.4541C16.8602 19.3912 16.809 19.34 16.7461 19.3076L15.1844 18.5026C14.9385 18.3759 14.9385 18.0245 15.1844 17.8978L16.7461 17.0928C16.809 17.0604 16.8602 17.0092 16.8926 16.9463L17.6976 15.3846Z" fill="white"/>
        <path d="M17.3184 15.0488C17.6491 14.5842 18.3509 14.5842 18.6816 15.0488L18.7471 15.1553L19.5283 16.6709L21.0449 17.4531C21.6519 17.766 21.6519 18.6344 21.0449 18.9473L19.5283 19.7285L18.7471 21.2451C18.4342 21.8521 17.5658 21.8521 17.2529 21.2451L16.4707 19.7285L14.9551 18.9473C14.3481 18.6344 14.3481 17.766 14.9551 17.4531L16.4707 16.6709L17.2529 15.1553L17.3184 15.0488Z" stroke="black" strokeOpacity="0.16"/>
        <path d="M30.2178 6.49854C31.4301 7.20866 32.339 8.30921 32.832 9.59131L10.5449 31.8784L4.78027 28.5015C3.56775 27.7912 2.659 26.6901 2.16602 25.4077L24.4521 3.12158L30.2178 6.49854Z" fill="white" fillOpacity="0.32"/>
        <defs>
          <filter id="filter0_d_platinum" x="1.75" y="0" width="31.5" height="36" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.0201802 0 0 0 0 0.16 0 0 0 0 0.29982 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_platinum"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_platinum" result="shape"/>
          </filter>
          <clipPath id="paint1_angular_platinum_clip_path"><path d="M17.6976 15.3846C17.8243 15.1387 18.1757 15.1387 18.3024 15.3846L19.1074 16.9463C19.1398 17.0092 19.191 17.0604 19.2539 17.0928L20.8156 17.8978C21.0615 18.0245 21.0615 18.3759 20.8156 18.5026L19.2539 19.3076C19.191 19.34 19.1398 19.3912 19.1074 19.4541L18.3024 21.0158C18.1757 21.2616 17.8243 21.2616 17.6976 21.0158L16.8926 19.4541C16.8602 19.3912 16.809 19.34 16.7461 19.3076L15.1844 18.5026C14.9385 18.3759 14.9385 18.0245 15.1844 17.8978L16.7461 17.0928C16.809 17.0604 16.8602 17.0092 16.8926 16.9463L17.6976 15.3846Z"/></clipPath>
          <clipPath id="paint2_angular_platinum_clip_path"><path d="M17.6976 15.3846C17.8243 15.1387 18.1757 15.1387 18.3024 15.3846L19.1074 16.9463C19.1398 17.0092 19.191 17.0604 19.2539 17.0928L20.8156 17.8978C21.0615 18.0245 21.0615 18.3759 20.8156 18.5026L19.2539 19.3076C19.191 19.34 19.1398 19.3912 19.1074 19.4541L18.3024 21.0158C18.1757 21.2616 17.8243 21.2616 17.6976 21.0158L16.8926 19.4541C16.8602 19.3912 16.809 19.34 16.7461 19.3076L15.1844 18.5026C14.9385 18.3759 14.9385 18.0245 15.1844 17.8978L16.7461 17.0928C16.809 17.0604 16.8602 17.0092 16.8926 16.9463L17.6976 15.3846Z"/></clipPath>
          <linearGradient id="paint0_linear_platinum" x1="17.5004" y1="35.9515" x2="17.5004" y2="-0.951505" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0078F0"/>
            <stop offset="1" stopColor="#CFE3F7"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    description: "This activates when you book 25-30 qualified appointments.",
    benefits: [
      "you get up to up to $125 per appointment and everything in gold."
    ]
  }
];

const Rankings = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--onboarding-gradient-start))] to-[hsl(var(--onboarding-gradient-end))] px-6 pb-10">
      {/* Header */}
      <div className="pt-6 max-w-full mx-auto flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(-1)}
          className="w-[37px] h-[37px] rounded-[10px] mt-[40px]"
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <h1 className="flex-1 text-center text-xl font-[500] mt-[40px]">
          Rankings
        </h1>
        <div className="w-10" />
      </div>

      {/* Rankings List */}
      <div className="max-w-full mx-auto mt-6 space-y-4">
        {rankingsData.map((rank, index) => (
          <Card
            key={index}
            className="bg-white/90 backdrop-blur border-0 shadow-sm rounded-[15px] p-5 space-y-3"
          >
            {/* Icon and Title */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center">
                {rank.icon}
              </div>
              <h2 className="text-lg font-semibold">{rank.name}</h2>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed">
              {rank.description}
            </p>

            {/* Benefits */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold">Benefits</h3>
              <ul className="space-y-1.5">
                {rank.benefits.map((benefit, benefitIndex) => (
                  <li
                    key={benefitIndex}
                    className="text-sm text-muted-foreground flex gap-2"
                  >
                    <span className="text-muted-foreground">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Rankings;
