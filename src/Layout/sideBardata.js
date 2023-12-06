import { FaHome } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { IoBagCheckOutline } from "react-icons/io5";
import { RiUserReceivedLine } from "react-icons/ri";
import { MdOutlineEmojiPeople } from "react-icons/md";


export const getLinks = () => {
   // const user =("user");
    // const role = JSON.parse(user).role;
    // console.log(role === "Director");
  
    const links = [
      {
        id: 1,
        url: "/home",
        text: "Home",
        icon: <FaHome/>
      },
      {
        id: 2,
        url: "profile",
        text: "Profile",
        icon:<MdPeopleAlt/>
      },
      {
        id: 3,
        url: "purchaserequest",
        text: "Purchase Request",
        icon:<BiPurchaseTagAlt/>
      },
      {
        id: 4,
        url: "reclaim",
        text: "Reclaim",
        icon:<IoBagCheckOutline/>
      },
      {
        id: 5,
        url: "leaverequest",
        text: "Leave/Off Request",
        icon: <RiUserReceivedLine/>
      },
      {
        id: 6,
        url: "complaints",
        text: "Complaints/Suggestions",
        icon:<MdOutlineEmojiPeople/>
      },
    ];
  
    //if (role === "Director") {
    //   return link3;
   // } else if (role === "admin") {
    //   return links2;
    //}
   return links;
  };
  