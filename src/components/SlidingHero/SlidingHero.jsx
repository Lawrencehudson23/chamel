import React, { useState } from "react";
import "./SlidingHero.less";
import SlidingHeroItem from "../SlidingHeroItem/SlidingHeroItem";

const SlidingHero = () => {
  // eslint-disable-next-line
  const [items, setItems] = useState([
    {
      id: 1,
      title: "fashion",
      imgUrl:
        "//www.chanel.com/us/img/q_auto,fl_lossy,dpr_2,f_jpg/w_768/prd-emea/sys-master/content/hd3/h06/8930894348318-20a_ib_hp_corpo_one_desktop.jpg 768w,//www.chanel.com/us/img/q_auto,fl_lossy,dpr_2,f_jpg/w_1280/prd-emea/sys-master/content/hd3/h06/8930894348318-20a_ib_hp_corpo_one_desktop.jpg 1280w,//www.chanel.com/us/img/q_auto,fl_lossy,dpr_2,f_jpg/w_1920/prd-emea/sys-master/content/hd3/h06/8930894348318-20a_ib_hp_corpo_one_desktop.jpg 1920w",
      subtitle: "Paris - 31 rue Cambon 2019/20 Métiers d'art",
    },
    {
      id: 2,
      title: "eyewear",
      imgUrl:
        "//www.chanel.com/us/img/q_auto,fl_lossy,dpr_2,f_jpg/w_768/prd-emea/sys-master/content/h7d/hba/8886180872222-push-home_mode_one-desktop.jpg 768w,//www.chanel.com/us/img/q_auto,fl_lossy,dpr_2,f_jpg/w_1280/prd-emea/sys-master/content/h7d/hba/8886180872222-push-home_mode_one-desktop.jpg 1280w,//www.chanel.com/us/img/q_auto,fl_lossy,dpr_2,f_jpg/w_1920/prd-emea/sys-master/content/h7d/hba/8886180872222-push-home_mode_one-desktop.jpg 1920w",
      subtitle: "spring-summer 2020 campaign",
    },
    {
      id: 3,
      title: "makeup",
      imgUrl:
        "//www.chanel.com/us/img/q_auto,fl_lossy,dpr_2,f_jpg/w_768/prd-emea/sys-master/content/hd7/h90/8914593284126-DESK_ONE_hp_corpo(14)(1)(1)copy.png 768w,//www.chanel.com/us/img/q_auto,fl_lossy,dpr_2,f_jpg/w_1280/prd-emea/sys-master/content/hd7/h90/8914593284126-DESK_ONE_hp_corpo(14)(1)(1)copy.png 1280w,//www.chanel.com/us/img/q_auto,fl_lossy,dpr_2,f_jpg/w_1920/prd-emea/sys-master/content/hd7/h90/8914593284126-DESK_ONE_hp_corpo(14)(1)(1)copy.png 1920w",
      subtitle: "rouge coco flash",
    },
    {
      id: 4,
      title: "haute couture",
      imgUrl:
        "//www.chanel.com/us/img/q_auto,fl_lossy,dpr_2,f_jpg/w_768/prd-emea/sys-master/content/h88/hce/8933011750942-hp_corpo_one_desktop.jpg 768w,//www.chanel.com/us/img/q_auto,fl_lossy,dpr_2,f_jpg/w_1280/prd-emea/sys-master/content/h88/hce/8933011750942-hp_corpo_one_desktop.jpg 1280w,//www.chanel.com/us/img/q_auto,fl_lossy,dpr_2,f_jpg/w_1920/prd-emea/sys-master/content/h88/hce/8933011750942-hp_corpo_one_desktop.jpg 1920w",
      subtitle: "fall-winter 2020/21",
    },
    {
      id: 5,
      title: "fine jewelry",
      imgUrl:
        "//www.chanel.com/us/img/q_auto,fl_lossy,dpr_2,f_jpg/w_768/prd-emea/sys-master/content/ha6/h8a/8892358950942-HP_2880x1260.jpg 768w,//www.chanel.com/us/img/q_auto,fl_lossy,dpr_2,f_jpg/w_1280/prd-emea/sys-master/content/ha6/h8a/8892358950942-HP_2880x1260.jpg 1280w,//www.chanel.com/us/img/q_auto,fl_lossy,dpr_2,f_jpg/w_1920/prd-emea/sys-master/content/ha6/h8a/8892358950942-HP_2880x1260.jpg 1920w",
      subtitle: "the vocabulary of style",
    },
    {
      id: 6,
      title: "fragrance",
      imgUrl:
        "//www.chanel.com/us/img/q_auto,fl_lossy,dpr_2,f_jpg/w_768/prd-emea/sys-master/content/hab/h01/8939159912478-LES-EAUX-2020-RANGE-HP_ONE_DESKTOP_2880x1260.jpg 768w,//www.chanel.com/us/img/q_auto,fl_lossy,dpr_2,f_jpg/w_1280/prd-emea/sys-master/content/hab/h01/8939159912478-LES-EAUX-2020-RANGE-HP_ONE_DESKTOP_2880x1260.jpg 1280w,//www.chanel.com/us/img/q_auto,fl_lossy,dpr_2,f_jpg/w_1920/prd-emea/sys-master/content/hab/h01/8939159912478-LES-EAUX-2020-RANGE-HP_ONE_DESKTOP_2880x1260.jpg 1920w",
      subtitle: "les eaux de chanel",
    },
    {
      id: 7,
      title: "skincare",
      imgUrl:
        "//www.chanel.com/us/img/q_auto,fl_lossy,dpr_2,f_jpg/w_768/prd-emea/sys-master/content/ha9/h9d/8899583082526-DESK_ONE_hp_corpo(1).jpg 768w,//www.chanel.com/us/img/q_auto,fl_lossy,dpr_2,f_jpg/w_1280/prd-emea/sys-master/content/ha9/h9d/8899583082526-DESK_ONE_hp_corpo(1).jpg 1280w,//www.chanel.com/us/img/q_auto,fl_lossy,dpr_2,f_jpg/w_1920/prd-emea/sys-master/content/ha9/h9d/8899583082526-DESK_ONE_hp_corpo(1).jpg 1920w",
      subtitle: "hydra beauty",
    },
    {
      id: 8,
      title: "watches",
      imgUrl:
        "//www.chanel.com/us/img/q_auto,fl_lossy,dpr_2,f_jpg/w_768/prd-emea/sys-master/content/h48/h3f/8896479658014-HP_CORPO_ONE_2880x1260.jpg 768w,//www.chanel.com/us/img/q_auto,fl_lossy,dpr_2,f_jpg/w_1280/prd-emea/sys-master/content/h48/h3f/8896479658014-HP_CORPO_ONE_2880x1260.jpg 1280w,//www.chanel.com/us/img/q_auto,fl_lossy,dpr_2,f_jpg/w_1920/prd-emea/sys-master/content/h48/h3f/8896479658014-HP_CORPO_ONE_2880x1260.jpg 1920w",
      subtitle: "j12 turns 20",
    },
    {
      id: 9,
      title: "high jewelry",
      imgUrl:
        "//www.chanel.com/us/img/q_auto,fl_lossy,dpr_2,f_jpg/w_768/prd-emea/sys-master/content/haa/haa/8835826417694-HPone2880x1260.jpg 768w,//www.chanel.com/us/img/q_auto,fl_lossy,dpr_2,f_jpg/w_1280/prd-emea/sys-master/content/haa/haa/8835826417694-HPone2880x1260.jpg 1280w,//www.chanel.com/us/img/q_auto,fl_lossy,dpr_2,f_jpg/w_1920/prd-emea/sys-master/content/haa/haa/8835826417694-HPone2880x1260.jpg 1920w",
      subtitle: "le paris russe de chanel",
    },
  ]);

  return (
    <div className="sliding-hero">
      {items
        ? items.map(({ id, ...otherProps }) => (
            <SlidingHeroItem key={id} {...otherProps} />
          ))
        : ""}
    </div>
  );
};

export default SlidingHero;
