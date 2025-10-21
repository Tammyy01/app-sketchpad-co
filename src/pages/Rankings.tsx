import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const rankingsData = [
  {
    name: "Bronze",
    icon: (
      <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_bronze)">
          <path d="M17.3781 27.4514C15.5128 28.8495 12.9871 28.8495 11.1219 27.4514L2.19408 20.7596C0.328862 19.3616 -0.451621 16.8834 0.260831 14.6213L3.67096 3.79369C4.38341 1.53157 6.42675 0 8.73229 0H19.7677C22.0733 0 24.1166 1.53157 24.829 3.7937L28.2392 14.6213C28.9516 16.8834 28.1711 19.3616 26.3059 20.7596L17.3781 27.4514Z" fill="url(#paint0_linear_bronze)"/>
          <path d="M8.73242 1H19.7676C21.6194 1 23.2884 2.23177 23.875 4.09375L27.2852 14.9219C27.873 16.7887 27.2235 18.8214 25.7061 19.959L16.7783 26.6514C15.2686 27.783 13.2314 27.783 11.7217 26.6514L2.79395 19.959C1.27645 18.8214 0.62695 16.7887 1.21484 14.9219L4.625 4.09375C5.2116 2.23177 6.88059 1 8.73242 1Z" stroke="white" strokeOpacity="0.4" strokeWidth="2"/>
        </g>
        <defs>
          <filter id="filter0_d_bronze" x="0" y="0" width="28.5" height="29.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.300741 0 0 0 0 0.171852 0 0 0 0 0.0192593 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_bronze"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_bronze" result="shape"/>
          </filter>
          <linearGradient id="paint0_linear_bronze" x1="14.2504" y1="29.796" x2="14.2504" y2="-3.1457" gradientUnits="userSpaceOnUse">
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
      <svg width="40" height="40" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_silver)">
          <path d="M8.7983 13.2551C7.80513 14.2483 6.19487 14.2483 5.2017 13.2551L0.744882 8.7983C-0.248294 7.80513 -0.248294 6.19487 0.744882 5.2017L5.2017 0.744882C6.19487 -0.248294 7.80513 -0.248294 8.7983 0.744882L13.2551 5.2017C14.2483 6.19487 14.2483 7.80513 13.2551 8.7983L8.7983 13.2551Z" fill="url(#paint0_linear_silver)"/>
          <path d="M5.90918 1.45215C6.5118 0.849642 7.4882 0.849642 8.09082 1.45215L12.5479 5.90918C13.1504 6.5118 13.1504 7.4882 12.5479 8.09082L8.09082 12.5479C7.4882 13.1504 6.5118 13.1504 5.90918 12.5479L1.45215 8.09082C0.849642 7.4882 0.849642 6.5118 1.45215 5.90918L5.90918 1.45215Z" stroke="white" strokeOpacity="0.4" strokeWidth="2"/>
        </g>
        <defs>
          <filter id="filter0_d_silver" x="0" y="0" width="14" height="15" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.117138 0 0 0 0 0.176258 0 0 0 0 0.202862 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_silver"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_silver" result="shape"/>
          </filter>
          <linearGradient id="paint0_linear_silver" x1="6.99997" y1="15.0534" x2="6.99997" y2="-1.0534" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8AA8B5"/>
            <stop offset="1" stopColor="#DCE5E8"/>
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
      <svg width="40" height="40" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_gold)">
          <path d="M8.45938 13.1608C7.58894 13.8132 6.41028 13.8132 5.53984 13.1608L1.37352 10.0379C0.503078 9.38549 0.138853 8.22903 0.47133 7.17337L2.06273 2.12049C2.3952 1.06483 3.34876 0.350098 4.42468 0.350098H9.57454C10.6505 0.350098 11.604 1.06483 11.9365 2.12049L13.5279 7.17337C13.8604 8.22903 13.4961 9.38549 12.6257 10.0379L8.45938 13.1608Z" fill="url(#paint0_linear_gold)"/>
          <path d="M4.4248 1.3501H9.57422C10.1964 1.3501 10.7758 1.76498 10.9824 2.42041L12.5742 7.47412C12.782 8.13433 12.5489 8.84592 12.0264 9.23779L7.85938 12.3608C7.34447 12.7466 6.65452 12.7467 6.13965 12.3608L1.97363 9.23779C1.45089 8.84597 1.21703 8.13443 1.4248 7.47412L3.0166 2.42041C3.22325 1.76495 3.80262 1.3501 4.4248 1.3501Z" stroke="white" strokeOpacity="0.4" strokeWidth="2"/>
        </g>
        <defs>
          <filter id="filter0_d_gold" x="0.349609" y="0.350098" width="13.3008" height="14.2998" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.300741 0 0 0 0 0.171852 0 0 0 0 0.0192593 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_gold"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_gold" result="shape"/>
          </filter>
          <linearGradient id="paint0_linear_gold" x1="6.99978" y1="14.2549" x2="6.99978" y2="-1.1179" gradientUnits="userSpaceOnUse">
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
      <svg width="40" height="40" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_platinum)">
          <path d="M8.21165 13.6704C7.4614 14.1099 6.53704 14.1099 5.78678 13.6704L1.91165 11.4005C1.1614 10.961 0.699219 10.1488 0.699219 9.2699V4.7301C0.699219 3.85116 1.1614 3.03898 1.91165 2.59951L5.78678 0.329604C6.53704 -0.109868 7.4614 -0.109868 8.21165 0.329604L12.0868 2.59951C12.837 3.03898 13.2992 3.85116 13.2992 4.7301V9.2699C13.2992 10.1488 12.837 10.961 12.0868 11.4005L8.21165 13.6704Z" fill="url(#paint0_linear_platinum)"/>
          <path d="M6.29199 1.19238C6.73005 0.935788 7.26798 0.935851 7.70605 1.19238L11.5811 3.46191C12.0209 3.71955 12.2988 4.20177 12.2988 4.73047V9.26953C12.2988 9.79823 12.0209 10.2805 11.5811 10.5381L7.70605 12.8076C7.26798 13.0641 6.73005 13.0642 6.29199 12.8076L2.41699 10.5381C1.97717 10.2805 1.69922 9.79823 1.69922 9.26953V4.73047C1.69922 4.20177 1.97717 3.71955 2.41699 3.46191L6.29199 1.19238Z" stroke="white" strokeOpacity="0.4" strokeWidth="2"/>
        </g>
        <defs>
          <filter id="filter0_d_platinum" x="0.699219" y="0" width="12.5996" height="15" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.0201802 0 0 0 0 0.16 0 0 0 0 0.29982 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_platinum"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_platinum" result="shape"/>
          </filter>
          <linearGradient id="paint0_linear_platinum" x1="6.99938" y1="14.3806" x2="6.99938" y2="-0.380602" gradientUnits="userSpaceOnUse">
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
