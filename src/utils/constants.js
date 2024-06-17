import { ToastContainer, toast } from "react-toastify";

export const img_url =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const bg_url = "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const users_icon_url = "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";


// export const construction_img = "https://png.pngtree.com/png-clipart/20210711/original/pngtree-construction-engineer-drawing-description-png-image_6516758.jpg"

export const construction_img = "https://t3.ftcdn.net/jpg/00/42/18/78/240_F_42187896_ST1use0vlLIi1v6j8wotnqW3jcfVkpr2.jpg"


// notify function to show notification
export const notify = (msg, isValid) => {
  toast(msg, {
    style: {
      color: "#FFFFFF",
      background: isValid ? "#008000" : "#FF0000",
    },
  });
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmM0MWJiZmNmOWU1ZWRiM2Y5OTQ3MDFkMWQxYTVhNCIsInN1YiI6IjY1YjlkZmQwMzBmNzljMDE2MmFhMjNlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Mg9g8RVkPm-yGRxPmGeIExkshsKEaAaOS6i4DyxLNNg",
  },
};


// language constant
export const SUPPORTED_LANGUAGUES=[
  {identifier:"en",name:"English"},
  {identifier:"hindi",name:"Hindi"},
  {identifier:"spanish",name:"Spanish"},
  {identifier:"marathi",name:"Marathi"},
]


// export const  OPENAI_API_KEY="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";


// export const  OPENAI_API_KEY="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";

export const  OPENAI_API_KEY="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"