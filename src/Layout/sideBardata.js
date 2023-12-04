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
    //   {
    //     id: 7,
    //     url: "aircargo",
    //     text: "Air Cargo Shipment",
    //     icon: <BiPurchaseTagAlt/>
    //   },
    //   {
    //     id: 9,
    //     url: "sea",
    //     text: "Sea Cargo Shipments",
    //     icon:
    //   },
    //   {
    //     id: 11,
    //     url: "news",
    //     text: "Add News",
    //     icon: (
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="24"
    //         height="25"
    //         viewBox="0 0 24 25"
    //         fill="black"
    //       >
    //         <path
    //           d="M3 4.5V18.5C3 19.0304 3.21071 19.5391 3.58579 19.9142C3.96086 20.2893 4.46957 20.5 5 20.5H19C19.5304 20.5 20.0391 20.2893 20.4142 19.9142C20.7893 19.5391 21 19.0304 21 18.5V8.5H17"
    //           stroke="black"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //         />
    //         <path
    //           d="M3 4.5H17V18.5C17 19.0304 17.2107 19.5391 17.5858 19.9142C17.9609 20.2893 18.4696 20.5 19 20.5M13 8.5H7M13 12.5H9"
    //           stroke="white"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //         />
    //       </svg>
    //     ),
    //   },
  
      // {
      //   id: 13,
      //   url: "adminofficer",
      //   text: "Admin officer",
      //   icon: (
      //     <svg
      //       xmlns="http://www.w3.org/2000/svg"
      //       width="24"
      //       height="25"
      //       viewBox="0 0 24 25"
      //       fill="black"
      //     >
      //       <path
      //         d="M16.36 13.26C18.31 13.92 20 15 20 16.5V21.5H4V16.5C4 15 5.69 13.92 7.65 13.26L8.27 14.5L8.5 15C7 15.46 5.9 16.12 5.9 16.5V19.6H10.12L11 14.53L10.06 12.65C10.68 12.58 11.33 12.53 12 12.53C12.67 12.53 13.32 12.58 13.94 12.65L13 14.53L13.88 19.6H18.1V16.5C18.1 16.12 17 15.46 15.5 15L15.73 14.5L16.36 13.26ZM12 5.5C10.9 5.5 10 6.4 10 7.5C10 8.6 10.9 9.5 12 9.5C13.1 9.5 14 8.6 14 7.5C14 6.4 13.1 5.5 12 5.5ZM12 11.5C9.79 11.5 8 9.71 8 7.5C8 5.29 9.79 3.5 12 3.5C14.21 3.5 16 5.29 16 7.5C16 9.71 14.21 11.5 12 11.5Z"
      //         fill="black"
      //       />
      //     </svg>
      //   ),
      // },
    ];
  
    // const links2 = [
    //   {
    //     id: 1,
    //     url: "/home",
    //     text: "Home",
    //     icon: <FaHome/>
    //   },
    //   {
    //     id: 2,
    //     url: "profile",
    //     text: "profile",
    //     icon:<MdPeopleAlt/>
    //   },
    //   {
    //     id: 3,
    //     url: "shipmentbatch",
    //     text: "Shipment Batches",
    //     icon:<BiPurchaseTagAlt/>
    //   },
    //   {
    //     id: 4,
    //     url: "customer",
    //     text: "Customer",
    //     icon: (
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="24"
    //         height="25"
    //         viewBox="0 0 24 25"
    //         fill="none"
    //       >
    //         <path
    //           d="M16.304 4C16.8216 4.31111 17.2499 4.75093 17.5471 5.27665C17.8443 5.80237 18.0003 6.39608 18 7C18.0003 7.60392 17.8443 8.19763 17.5471 8.72335C17.2499 9.24907 16.8216 9.68889 16.304 10M22 21.5V20.9C22 18.66 22 17.54 21.564 16.684C21.1805 15.9314 20.5686 15.3195 19.816 14.936M9.5 10.5C9.95963 10.5 10.4148 10.4095 10.8394 10.2336C11.264 10.0577 11.6499 9.79988 11.9749 9.47487C12.2999 9.14987 12.5577 8.76403 12.7336 8.33939C12.9095 7.91475 13 7.45963 13 7C13 6.54037 12.9095 6.08525 12.7336 5.66061C12.5577 5.23597 12.2999 4.85013 11.9749 4.52513C11.6499 4.20012 11.264 3.94231 10.8394 3.76642C10.4148 3.59053 9.95963 3.5 9.5 3.5C8.57174 3.5 7.6815 3.86875 7.02513 4.52513C6.36875 5.1815 6 6.07174 6 7C6 7.92826 6.36875 8.8185 7.02513 9.47487C7.6815 10.1313 8.57174 10.5 9.5 10.5ZM2 20.9V21.5H17V20.9C17 18.66 17 17.54 16.564 16.684C16.1805 15.9314 15.5686 15.3195 14.816 14.936C13.96 14.5 12.84 14.5 10.6 14.5H8.4C6.16 14.5 5.04 14.5 4.184 14.936C3.43139 15.3195 2.81949 15.9314 2.436 16.684C2 17.54 2 18.66 2 20.9Z"
    //           stroke="#1F1E1E"
    //           stroke-width="2"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //         />
    //       </svg>
    //     ),
    //   },
    //   {
    //     id: 6,
    //     url: "location",
    //     text: "location",
    //     icon: (
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="32"
    //         height="33"
    //         viewBox="0 0 32 33"
    //         fill="none"
    //       >
    //         <path
    //           d="M16 15.5C18.2091 15.5 20 13.7091 20 11.5C20 9.29086 18.2091 7.5 16 7.5C13.7909 7.5 12 9.29086 12 11.5C12 13.7091 13.7909 15.5 16 15.5Z"
    //           stroke="#1F1E1E"
    //           stroke-width="2"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //         />
    //         <path
    //           d="M24.0002 15.5C21.0002 22.5 16.0002 30.5 16.0002 30.5C16.0002 30.5 11.0002 22.5 8.00024 15.5C5.00024 8.5 10.0002 2.5 16.0002 2.5C22.0002 2.5 27.0002 8.5 24.0002 15.5Z"
    //           stroke="#1F1E1E"
    //           stroke-width="2"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //         />
    //       </svg>
    //     ),
    //   },
  
    //   {
    //     id: 8,
    //     url: "aircargo",
    //     text: "Air Cargo Shipment",
    //     icon: (
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="24"
    //         height="24"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //       >
    //         <path
    //           d="M21 11C21 16.55 17.16 21.74 12 23C6.84 21.74 3 16.55 3 11V5L12 1L21 5V11ZM12 21C15.75 20 19 15.54 19 11.22V6.3L12 3.18L5 6.3V11.22C5 15.54 8.25 20 12 21ZM12 5.68C12.5 5.68 12.95 6.11 12.95 6.63V10.11L18 13.26V14.53L12.95 12.95V16.42L14.21 17.37V18.32L12 17.68L9.79 18.32V17.37L11.05 16.42V12.95L6 14.53V13.26L11.05 10.11V6.63C11.05 6.11 11.5 5.68 12 5.68Z"
    //           fill="#1F1E1E"
    //         />
    //       </svg>
    //     ),
    //   },
    //   {
    //     id: 9,
    //     url: "sea",
    //     text: "Sea Cargo Shipments",
    //     icon: (
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="24"
    //         height="24"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //       >
    //         <g clip-path="url(#clip0_1159_1323)">
    //           <path
    //             d="M9.65799 13.1115H8.65187C8.62976 13.1116 8.60788 13.116 8.58749 13.1246C8.5671 13.1331 8.54859 13.1456 8.53303 13.1613C8.51746 13.177 8.50514 13.1956 8.49677 13.2161C8.4884 13.2366 8.48414 13.2585 8.48424 13.2806V13.6185C8.48424 13.7115 8.55924 13.7865 8.65187 13.7865H9.65799C9.74987 13.7865 9.82562 13.7115 9.82562 13.6185V13.2806C9.82572 13.236 9.80814 13.1931 9.77672 13.1614C9.74531 13.1297 9.70262 13.1118 9.65799 13.1115ZM11.6699 13.1115H10.6637C10.6416 13.1116 10.6198 13.116 10.5994 13.1246C10.579 13.1331 10.5605 13.1456 10.5449 13.1613C10.5293 13.177 10.517 13.1956 10.5086 13.2161C10.5003 13.2366 10.496 13.2585 10.4961 13.2806V13.6185C10.4961 13.7115 10.5711 13.7865 10.6637 13.7865H11.6699C11.7617 13.7865 11.8375 13.7115 11.8375 13.6185V13.2806C11.8376 13.236 11.82 13.1931 11.7886 13.1614C11.7572 13.1297 11.7145 13.1118 11.6699 13.1115ZM7.49987 10.89H7.99749V11.9107H7.49987V10.89ZM8.76212 10.89H9.25937V11.9107H8.76212V10.89ZM10.0232 10.89H10.5212V11.9107H10.0232V10.89ZM11.2855 10.89H11.7827V11.9107H11.2855V10.89ZM12.5466 10.89H13.0446V11.9107H12.5466V10.89ZM13.8092 10.89H14.3065V11.9107H13.8092V10.89ZM15.0704 10.89H15.568V11.9107H15.0704V10.89ZM16.3322 10.89H16.8299V11.9107H16.3322V10.89ZM5.10137 4.90235C4.98159 4.80233 4.8709 4.6919 4.77062 4.57235L4.64012 4.41072L4.43687 4.44447C4.08849 4.50335 3.75512 4.50072 3.42437 4.3991C3.25085 4.34517 3.08509 4.2689 2.93124 4.17222C2.76512 4.07397 2.61024 3.94835 2.44824 3.80322C2.46924 4.02485 2.56412 4.23035 2.68599 4.4216C2.81499 4.60722 2.98149 4.77935 3.18549 4.9031C3.53499 5.12585 3.96587 5.19222 4.36637 5.1506C4.47999 5.26272 4.59624 5.35085 4.72899 5.43522C4.91162 5.55072 5.11524 5.63547 5.32787 5.68385C5.75462 5.7791 6.21399 5.68722 6.52262 5.4266C6.12024 5.41647 5.78649 5.33772 5.50187 5.1761C5.35944 5.09865 5.22525 5.00693 5.10137 4.90235ZM9.42999 6.2051C9.32588 6.16004 9.22956 6.09878 9.14462 6.0236C9.06907 5.95679 9.00229 5.88068 8.94587 5.7971C8.89242 5.71957 8.84705 5.63676 8.81049 5.54997L8.70249 5.26085L8.40924 5.32572C8.12799 5.3876 7.86062 5.4221 7.59999 5.38572C7.34012 5.3516 7.06862 5.23535 6.80762 4.9901C6.79899 5.35872 7.06037 5.72285 7.42187 5.90285C7.70087 6.0416 8.00912 6.07497 8.29862 6.04722C8.34474 6.11397 8.39537 6.17435 8.45462 6.23585C8.57912 6.35922 8.73362 6.45935 8.90124 6.51372C9.24137 6.62547 9.59424 6.54522 9.82562 6.34197C9.67562 6.29622 9.54362 6.26097 9.42999 6.2051Z"
    //             fill="#1F1E1E"
    //           />
    //           <path
    //             d="M21.2104 19.4111C21.2554 18.2542 21.585 17.7232 22.083 16.9189L22.203 16.725C23.1296 15.2175 23.4435 14.0415 23.1353 13.2281C22.9237 12.6683 22.4966 12.4823 22.3785 12.4403C21.8092 12.195 20.9618 12.0645 19.9264 12.0645C19.473 12.0645 18.7774 12.0938 17.8845 12.2153V10.0369H16.5161V9.03412H13.5139L12.4725 6.93412C12.4316 6.9165 12.3889 6.90375 12.3472 6.888C12.326 6.68654 12.2542 6.49372 12.1383 6.32756C12.0224 6.16139 11.8663 6.02728 11.6846 5.93775C11.671 5.57785 11.5546 5.22938 11.3491 4.93353C11.1437 4.63768 10.8579 4.40683 10.5255 4.26825C10.3678 3.85451 10.0882 3.49843 9.72363 3.24717C9.35906 2.99591 8.92676 2.86133 8.484 2.86125C8.31825 2.86125 8.15362 2.88075 7.99275 2.91825C7.76581 2.6704 7.49156 2.47049 7.18616 2.33028C6.88076 2.19007 6.55038 2.11241 6.2145 2.10188C5.69513 1.27163 4.77712 0.75 3.78975 0.75C2.2095 0.75 0.923625 2.046 0.923625 3.639C0.923625 5.23125 2.20912 6.52725 3.78975 6.52725C3.98188 6.52711 4.1735 6.50738 4.36162 6.46838C4.59434 6.70201 4.87105 6.88722 5.17575 7.01331C5.48045 7.1394 5.80712 7.20387 6.13688 7.203C6.53577 7.20353 6.92899 7.1085 7.28363 6.92587C7.63538 7.15837 8.04487 7.28512 8.47162 7.28775C8.71833 7.55318 9.03775 7.74008 9.39 7.82513L9.23925 9.03525H7.83L6.1575 9.609V10.6852L5.13112 11.1566V13.101H6.13725V13.9354L3.79013 15.1178V17.4202C2.33025 17.8365 1.41675 17.9636 1.39838 17.9659L1.09725 18.0056V19.413H0.75V23.25H22.9039V19.4126H21.21L21.2104 19.4111ZM8.70375 6.74213C8.63137 6.75187 8.55937 6.76462 8.48438 6.76462C8.0495 6.76422 7.63207 6.59353 7.3215 6.28912C6.97852 6.5426 6.56336 6.67954 6.13688 6.67987C5.82655 6.67958 5.52055 6.60713 5.24304 6.46825C4.96553 6.32936 4.72412 6.12785 4.53787 5.87962C4.29697 5.96169 4.04425 6.00374 3.78975 6.00412C2.49337 6.00412 1.443 4.9455 1.443 3.639C1.443 2.33213 2.49337 1.27312 3.78975 1.27312C4.731 1.27312 5.54025 1.83225 5.9145 2.63812C6.28213 2.59728 6.65389 2.65889 6.98869 2.81613C7.3235 2.97337 7.6083 3.22013 7.81162 3.52913C8.02327 3.43441 8.2525 3.38534 8.48438 3.38513C9.27675 3.38513 9.93637 3.9405 10.1119 4.68525C10.4117 4.75199 10.6797 4.91912 10.8715 5.15897C11.0633 5.39882 11.1675 5.697 11.1667 6.00412C11.1667 6.12337 11.1469 6.23662 11.1176 6.34687C11.1345 6.34575 11.1502 6.342 11.1667 6.342C11.4334 6.342 11.661 6.49988 11.7694 6.72638C11.5707 6.68894 11.369 6.66973 11.1667 6.669C10.6365 6.669 9.93637 6.79688 9.49012 7.0185L9.45487 7.30163C9.14566 7.21092 8.87919 7.01242 8.70375 6.74213ZM6.80775 10.386H17.5384V12.2677C17.26 12.31 16.9827 12.3589 16.7066 12.4144H6.80775V10.386ZM12.5205 13.6789C11.5644 14.0642 10.6308 14.5032 9.72412 14.9936C9.09846 15.3307 8.46133 15.646 7.81388 15.939V12.7631H15.234C14.7591 12.8923 14.2884 13.0362 13.8225 13.1947C13.8084 13.1698 13.788 13.149 13.7633 13.1343C13.7386 13.1197 13.7106 13.1119 13.6819 13.1115H12.6757C12.6537 13.1116 12.6318 13.1161 12.6114 13.1246C12.5911 13.1332 12.5726 13.1457 12.557 13.1614C12.5415 13.1771 12.5292 13.1957 12.5209 13.2162C12.5126 13.2366 12.5084 13.2585 12.5085 13.2806V13.6185C12.5085 13.6399 12.513 13.6601 12.5205 13.6789ZM6.4725 15.0979C6.4725 15.0049 6.5415 14.8973 6.62438 14.8571L7.32675 14.5271C7.41038 14.4874 7.47825 14.5312 7.47825 14.6243V15.3904C7.47599 15.4392 7.46011 15.4865 7.43241 15.5267C7.40471 15.567 7.36629 15.5988 7.3215 15.6184L6.62963 15.8786C6.543 15.9112 6.47213 15.8617 6.47213 15.7687L6.4725 15.0979ZM5.29875 15.6495C5.29875 15.5565 5.36775 15.4481 5.451 15.4088L5.98575 15.1575C6.069 15.1181 6.13725 15.162 6.13725 15.255V15.8948C6.13503 15.9436 6.11917 15.9909 6.09146 16.0312C6.06376 16.0715 6.02532 16.1032 5.9805 16.1227L5.45662 16.32C5.37037 16.3523 5.29912 16.3028 5.29912 16.2098L5.29875 15.6495ZM4.125 16.2008C4.125 16.1077 4.194 16.0001 4.27725 15.9608L4.812 15.7091C4.89525 15.6697 4.9635 15.7136 4.9635 15.8066V16.3369C4.96124 16.3857 4.94536 16.433 4.91766 16.4732C4.88996 16.5135 4.85154 16.5453 4.80675 16.5649L4.28287 16.7618C4.19662 16.794 4.12538 16.7449 4.12538 16.6519V16.2008H4.125ZM1.78912 18.6097C2.78437 18.438 6.09037 17.7465 10.0507 15.6086C14.8065 13.0399 18.5415 12.7628 19.9268 12.7628C20.8628 12.7628 21.6405 12.8779 22.1168 13.0868L22.1569 13.101C22.1588 13.1018 22.3781 13.1835 22.4888 13.4764C22.5247 13.5709 22.554 13.7059 22.5555 13.8866C22.3594 13.718 22.138 13.5814 21.8993 13.482C19.8225 12.8959 15.0739 13.3219 9.8085 16.1655C6.04275 18.1988 2.82 18.681 1.78912 18.7886V18.6097ZM20.469 21.0499C19.2735 21.2876 14.3692 22.203 9.873 22.203C7.47525 22.203 5.56538 21.9454 4.19513 21.438C3.66788 21.2426 2.85113 20.8605 1.78912 19.794V19.1269C2.83425 19.02 6.13237 18.534 9.96638 16.4636C15.0735 13.7059 19.7861 13.2574 21.7766 13.7966C21.9881 13.8825 22.29 14.046 22.512 14.3156C22.4228 14.7844 22.1764 15.4436 21.6139 16.3579L21.4961 16.5495C20.979 17.3831 20.5706 18.042 20.5189 19.3792C20.4896 19.9357 20.473 20.4927 20.469 21.0499Z"
    //             fill="#1F1E1E"
    //           />
    //         </g>
    //         <defs>
    //           <clipPath id="clip0_1159_1323">
    //             <rect width="24" height="24" fill="white" />
    //           </clipPath>
    //         </defs>
    //       </svg>
    //     ),
    //   },
    // ];
  
    // const link3 = [
    //   {
    //     id: 1,
    //     url: "/home",
    //     text: "Home",
    //     icon: (
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="24"
    //         height="25"
    //         viewBox="0 0 24 25"
    //         fill="none"
    //       >
    //         <path
    //           d="M20 19.5V11C20 10.8448 19.9639 10.6916 19.8944 10.5528C19.825 10.4139 19.7242 10.2931 19.6 10.2L12.6 4.95C12.4269 4.82018 12.2164 4.75 12 4.75C11.7836 4.75 11.5731 4.82018 11.4 4.95L4.4 10.2C4.2758 10.2931 4.175 10.4139 4.10557 10.5528C4.03614 10.6916 4 10.8448 4 11V19.5C4 19.7652 4.10536 20.0196 4.29289 20.2071C4.48043 20.3946 4.73478 20.5 5 20.5H9C9.26522 20.5 9.51957 20.3946 9.70711 20.2071C9.89464 20.0196 10 19.7652 10 19.5V16.5C10 16.2348 10.1054 15.9804 10.2929 15.7929C10.4804 15.6054 10.7348 15.5 11 15.5H13C13.2652 15.5 13.5196 15.6054 13.7071 15.7929C13.8946 15.9804 14 16.2348 14 16.5V19.5C14 19.7652 14.1054 20.0196 14.2929 20.2071C14.4804 20.3946 14.7348 20.5 15 20.5H19C19.2652 20.5 19.5196 20.3946 19.7071 20.2071C19.8946 20.0196 20 19.7652 20 19.5Z"
    //           stroke="#1F1E1E"
    //           stroke-width="2"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //         />
    //       </svg>
    //     ),
    //   },
    //   {
    //     id: 2,
    //     url: "profile",
    //     text: "Profile",
    //     icon:<MdPeopleAlt/>
    //   },
    //   {
    //     id: 3,
    //     url: "shipmentbatch",
    //     text: "Shipment Batches",
    //     icon:<BiPurchaseTagAlt/>
    //   },
    //   {
    //     id: 4,
    //     url: "customer",
    //     text: "Customer",
    //     icon: (
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="24"
    //         height="25"
    //         viewBox="0 0 24 25"
    //         fill="none"
    //       >
    //         <path
    //           d="M16.304 4C16.8216 4.31111 17.2499 4.75093 17.5471 5.27665C17.8443 5.80237 18.0003 6.39608 18 7C18.0003 7.60392 17.8443 8.19763 17.5471 8.72335C17.2499 9.24907 16.8216 9.68889 16.304 10M22 21.5V20.9C22 18.66 22 17.54 21.564 16.684C21.1805 15.9314 20.5686 15.3195 19.816 14.936M9.5 10.5C9.95963 10.5 10.4148 10.4095 10.8394 10.2336C11.264 10.0577 11.6499 9.79988 11.9749 9.47487C12.2999 9.14987 12.5577 8.76403 12.7336 8.33939C12.9095 7.91475 13 7.45963 13 7C13 6.54037 12.9095 6.08525 12.7336 5.66061C12.5577 5.23597 12.2999 4.85013 11.9749 4.52513C11.6499 4.20012 11.264 3.94231 10.8394 3.76642C10.4148 3.59053 9.95963 3.5 9.5 3.5C8.57174 3.5 7.6815 3.86875 7.02513 4.52513C6.36875 5.1815 6 6.07174 6 7C6 7.92826 6.36875 8.8185 7.02513 9.47487C7.6815 10.1313 8.57174 10.5 9.5 10.5ZM2 20.9V21.5H17V20.9C17 18.66 17 17.54 16.564 16.684C16.1805 15.9314 15.5686 15.3195 14.816 14.936C13.96 14.5 12.84 14.5 10.6 14.5H8.4C6.16 14.5 5.04 14.5 4.184 14.936C3.43139 15.3195 2.81949 15.9314 2.436 16.684C2 17.54 2 18.66 2 20.9Z"
    //           stroke="#1F1E1E"
    //           stroke-width="2"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //         />
    //       </svg>
    //     ),
    //   },
    //   {
    //     id: 6,
    //     url: "location",
    //     text: "location",
    //     icon: (
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="32"
    //         height="33"
    //         viewBox="0 0 32 33"
    //         fill="none"
    //       >
    //         <path
    //           d="M16 15.5C18.2091 15.5 20 13.7091 20 11.5C20 9.29086 18.2091 7.5 16 7.5C13.7909 7.5 12 9.29086 12 11.5C12 13.7091 13.7909 15.5 16 15.5Z"
    //           stroke="#1F1E1E"
    //           stroke-width="2"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //         />
    //         <path
    //           d="M24.0002 15.5C21.0002 22.5 16.0002 30.5 16.0002 30.5C16.0002 30.5 11.0002 22.5 8.00024 15.5C5.00024 8.5 10.0002 2.5 16.0002 2.5C22.0002 2.5 27.0002 8.5 24.0002 15.5Z"
    //           stroke="#1F1E1E"
    //           stroke-width="2"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //         />
    //       </svg>
    //     ),
    //   },
    //   {
    //     id: 7,
    //     url: "pendingpaymentorder",
    //     text: "Pending Payment Order",
    //     icon: (
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="24"
    //         height="24"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //       >
    //         <path
    //           d="M16.25 20H17.25V16H16.25V20ZM18.75 20H19.75V16H18.75V20ZM6 9H18V7H6V9ZM18 23C16.6167 23 15.4373 22.5123 14.462 21.537C13.4867 20.5617 12.9993 19.3827 13 18C13 16.6167 13.4877 15.4373 14.463 14.462C15.4383 13.4867 16.6173 12.9993 18 13C19.3833 13 20.5627 13.4877 21.538 14.463C22.5133 15.4383 23.0007 16.6173 23 18C23 19.3833 22.5123 20.5627 21.537 21.538C20.5617 22.5133 19.3827 23.0007 18 23ZM3 22V5C3 4.45 3.196 3.979 3.588 3.587C3.98 3.195 4.45067 2.99934 5 3H19C19.55 3 20.021 3.196 20.413 3.588C20.805 3.98 21.0007 4.45067 21 5V11.675C20.6833 11.525 20.3583 11.4 20.025 11.3C19.6917 11.2 19.35 11.125 19 11.075V5H5V19.05H11.075C11.1583 19.5667 11.2877 20.0583 11.463 20.525C11.6383 20.9917 11.8673 21.4333 12.15 21.85L12 22L10.5 20.5L9 22L7.5 20.5L6 22L4.5 20.5L3 22ZM6 17H11.075C11.125 16.65 11.2 16.3083 11.3 15.975C11.4 15.6417 11.525 15.3167 11.675 15H6V17ZM6 13H13.1C13.7333 12.3833 14.471 11.8957 15.313 11.537C16.155 11.1783 17.0507 10.9993 18 11H6V13Z"
    //           fill="#1F1E1E"
    //         />
    //       </svg>
    //     ),
    //   },
    //   {
    //     id: 8,
    //     url: "aircargo",
    //     text: "Air Cargo Shipment",
    //     icon: (
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="24"
    //         height="24"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //       >
    //         <path
    //           d="M21 11C21 16.55 17.16 21.74 12 23C6.84 21.74 3 16.55 3 11V5L12 1L21 5V11ZM12 21C15.75 20 19 15.54 19 11.22V6.3L12 3.18L5 6.3V11.22C5 15.54 8.25 20 12 21ZM12 5.68C12.5 5.68 12.95 6.11 12.95 6.63V10.11L18 13.26V14.53L12.95 12.95V16.42L14.21 17.37V18.32L12 17.68L9.79 18.32V17.37L11.05 16.42V12.95L6 14.53V13.26L11.05 10.11V6.63C11.05 6.11 11.5 5.68 12 5.68Z"
    //           fill="#1F1E1E"
    //         />
    //       </svg>
    //     ),
    //   },
    //   {
    //     id: 9,
    //     url: "sea",
    //     text: "Sea Cargo Shipments",
    //     icon: (
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="24"
    //         height="24"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //       >
    //         <g clip-path="url(#clip0_1159_1323)">
    //           <path
    //             d="M9.65799 13.1115H8.65187C8.62976 13.1116 8.60788 13.116 8.58749 13.1246C8.5671 13.1331 8.54859 13.1456 8.53303 13.1613C8.51746 13.177 8.50514 13.1956 8.49677 13.2161C8.4884 13.2366 8.48414 13.2585 8.48424 13.2806V13.6185C8.48424 13.7115 8.55924 13.7865 8.65187 13.7865H9.65799C9.74987 13.7865 9.82562 13.7115 9.82562 13.6185V13.2806C9.82572 13.236 9.80814 13.1931 9.77672 13.1614C9.74531 13.1297 9.70262 13.1118 9.65799 13.1115ZM11.6699 13.1115H10.6637C10.6416 13.1116 10.6198 13.116 10.5994 13.1246C10.579 13.1331 10.5605 13.1456 10.5449 13.1613C10.5293 13.177 10.517 13.1956 10.5086 13.2161C10.5003 13.2366 10.496 13.2585 10.4961 13.2806V13.6185C10.4961 13.7115 10.5711 13.7865 10.6637 13.7865H11.6699C11.7617 13.7865 11.8375 13.7115 11.8375 13.6185V13.2806C11.8376 13.236 11.82 13.1931 11.7886 13.1614C11.7572 13.1297 11.7145 13.1118 11.6699 13.1115ZM7.49987 10.89H7.99749V11.9107H7.49987V10.89ZM8.76212 10.89H9.25937V11.9107H8.76212V10.89ZM10.0232 10.89H10.5212V11.9107H10.0232V10.89ZM11.2855 10.89H11.7827V11.9107H11.2855V10.89ZM12.5466 10.89H13.0446V11.9107H12.5466V10.89ZM13.8092 10.89H14.3065V11.9107H13.8092V10.89ZM15.0704 10.89H15.568V11.9107H15.0704V10.89ZM16.3322 10.89H16.8299V11.9107H16.3322V10.89ZM5.10137 4.90235C4.98159 4.80233 4.8709 4.6919 4.77062 4.57235L4.64012 4.41072L4.43687 4.44447C4.08849 4.50335 3.75512 4.50072 3.42437 4.3991C3.25085 4.34517 3.08509 4.2689 2.93124 4.17222C2.76512 4.07397 2.61024 3.94835 2.44824 3.80322C2.46924 4.02485 2.56412 4.23035 2.68599 4.4216C2.81499 4.60722 2.98149 4.77935 3.18549 4.9031C3.53499 5.12585 3.96587 5.19222 4.36637 5.1506C4.47999 5.26272 4.59624 5.35085 4.72899 5.43522C4.91162 5.55072 5.11524 5.63547 5.32787 5.68385C5.75462 5.7791 6.21399 5.68722 6.52262 5.4266C6.12024 5.41647 5.78649 5.33772 5.50187 5.1761C5.35944 5.09865 5.22525 5.00693 5.10137 4.90235ZM9.42999 6.2051C9.32588 6.16004 9.22956 6.09878 9.14462 6.0236C9.06907 5.95679 9.00229 5.88068 8.94587 5.7971C8.89242 5.71957 8.84705 5.63676 8.81049 5.54997L8.70249 5.26085L8.40924 5.32572C8.12799 5.3876 7.86062 5.4221 7.59999 5.38572C7.34012 5.3516 7.06862 5.23535 6.80762 4.9901C6.79899 5.35872 7.06037 5.72285 7.42187 5.90285C7.70087 6.0416 8.00912 6.07497 8.29862 6.04722C8.34474 6.11397 8.39537 6.17435 8.45462 6.23585C8.57912 6.35922 8.73362 6.45935 8.90124 6.51372C9.24137 6.62547 9.59424 6.54522 9.82562 6.34197C9.67562 6.29622 9.54362 6.26097 9.42999 6.2051Z"
    //             fill="#1F1E1E"
    //           />
    //           <path
    //             d="M21.2104 19.4111C21.2554 18.2542 21.585 17.7232 22.083 16.9189L22.203 16.725C23.1296 15.2175 23.4435 14.0415 23.1353 13.2281C22.9237 12.6683 22.4966 12.4823 22.3785 12.4403C21.8092 12.195 20.9618 12.0645 19.9264 12.0645C19.473 12.0645 18.7774 12.0938 17.8845 12.2153V10.0369H16.5161V9.03412H13.5139L12.4725 6.93412C12.4316 6.9165 12.3889 6.90375 12.3472 6.888C12.326 6.68654 12.2542 6.49372 12.1383 6.32756C12.0224 6.16139 11.8663 6.02728 11.6846 5.93775C11.671 5.57785 11.5546 5.22938 11.3491 4.93353C11.1437 4.63768 10.8579 4.40683 10.5255 4.26825C10.3678 3.85451 10.0882 3.49843 9.72363 3.24717C9.35906 2.99591 8.92676 2.86133 8.484 2.86125C8.31825 2.86125 8.15362 2.88075 7.99275 2.91825C7.76581 2.6704 7.49156 2.47049 7.18616 2.33028C6.88076 2.19007 6.55038 2.11241 6.2145 2.10188C5.69513 1.27163 4.77712 0.75 3.78975 0.75C2.2095 0.75 0.923625 2.046 0.923625 3.639C0.923625 5.23125 2.20912 6.52725 3.78975 6.52725C3.98188 6.52711 4.1735 6.50738 4.36162 6.46838C4.59434 6.70201 4.87105 6.88722 5.17575 7.01331C5.48045 7.1394 5.80712 7.20387 6.13688 7.203C6.53577 7.20353 6.92899 7.1085 7.28363 6.92587C7.63538 7.15837 8.04487 7.28512 8.47162 7.28775C8.71833 7.55318 9.03775 7.74008 9.39 7.82513L9.23925 9.03525H7.83L6.1575 9.609V10.6852L5.13112 11.1566V13.101H6.13725V13.9354L3.79013 15.1178V17.4202C2.33025 17.8365 1.41675 17.9636 1.39838 17.9659L1.09725 18.0056V19.413H0.75V23.25H22.9039V19.4126H21.21L21.2104 19.4111ZM8.70375 6.74213C8.63137 6.75187 8.55937 6.76462 8.48438 6.76462C8.0495 6.76422 7.63207 6.59353 7.3215 6.28912C6.97852 6.5426 6.56336 6.67954 6.13688 6.67987C5.82655 6.67958 5.52055 6.60713 5.24304 6.46825C4.96553 6.32936 4.72412 6.12785 4.53787 5.87962C4.29697 5.96169 4.04425 6.00374 3.78975 6.00412C2.49337 6.00412 1.443 4.9455 1.443 3.639C1.443 2.33213 2.49337 1.27312 3.78975 1.27312C4.731 1.27312 5.54025 1.83225 5.9145 2.63812C6.28213 2.59728 6.65389 2.65889 6.98869 2.81613C7.3235 2.97337 7.6083 3.22013 7.81162 3.52913C8.02327 3.43441 8.2525 3.38534 8.48438 3.38513C9.27675 3.38513 9.93637 3.9405 10.1119 4.68525C10.4117 4.75199 10.6797 4.91912 10.8715 5.15897C11.0633 5.39882 11.1675 5.697 11.1667 6.00412C11.1667 6.12337 11.1469 6.23662 11.1176 6.34687C11.1345 6.34575 11.1502 6.342 11.1667 6.342C11.4334 6.342 11.661 6.49988 11.7694 6.72638C11.5707 6.68894 11.369 6.66973 11.1667 6.669C10.6365 6.669 9.93637 6.79688 9.49012 7.0185L9.45487 7.30163C9.14566 7.21092 8.87919 7.01242 8.70375 6.74213ZM6.80775 10.386H17.5384V12.2677C17.26 12.31 16.9827 12.3589 16.7066 12.4144H6.80775V10.386ZM12.5205 13.6789C11.5644 14.0642 10.6308 14.5032 9.72412 14.9936C9.09846 15.3307 8.46133 15.646 7.81388 15.939V12.7631H15.234C14.7591 12.8923 14.2884 13.0362 13.8225 13.1947C13.8084 13.1698 13.788 13.149 13.7633 13.1343C13.7386 13.1197 13.7106 13.1119 13.6819 13.1115H12.6757C12.6537 13.1116 12.6318 13.1161 12.6114 13.1246C12.5911 13.1332 12.5726 13.1457 12.557 13.1614C12.5415 13.1771 12.5292 13.1957 12.5209 13.2162C12.5126 13.2366 12.5084 13.2585 12.5085 13.2806V13.6185C12.5085 13.6399 12.513 13.6601 12.5205 13.6789ZM6.4725 15.0979C6.4725 15.0049 6.5415 14.8973 6.62438 14.8571L7.32675 14.5271C7.41038 14.4874 7.47825 14.5312 7.47825 14.6243V15.3904C7.47599 15.4392 7.46011 15.4865 7.43241 15.5267C7.40471 15.567 7.36629 15.5988 7.3215 15.6184L6.62963 15.8786C6.543 15.9112 6.47213 15.8617 6.47213 15.7687L6.4725 15.0979ZM5.29875 15.6495C5.29875 15.5565 5.36775 15.4481 5.451 15.4088L5.98575 15.1575C6.069 15.1181 6.13725 15.162 6.13725 15.255V15.8948C6.13503 15.9436 6.11917 15.9909 6.09146 16.0312C6.06376 16.0715 6.02532 16.1032 5.9805 16.1227L5.45662 16.32C5.37037 16.3523 5.29912 16.3028 5.29912 16.2098L5.29875 15.6495ZM4.125 16.2008C4.125 16.1077 4.194 16.0001 4.27725 15.9608L4.812 15.7091C4.89525 15.6697 4.9635 15.7136 4.9635 15.8066V16.3369C4.96124 16.3857 4.94536 16.433 4.91766 16.4732C4.88996 16.5135 4.85154 16.5453 4.80675 16.5649L4.28287 16.7618C4.19662 16.794 4.12538 16.7449 4.12538 16.6519V16.2008H4.125ZM1.78912 18.6097C2.78437 18.438 6.09037 17.7465 10.0507 15.6086C14.8065 13.0399 18.5415 12.7628 19.9268 12.7628C20.8628 12.7628 21.6405 12.8779 22.1168 13.0868L22.1569 13.101C22.1588 13.1018 22.3781 13.1835 22.4888 13.4764C22.5247 13.5709 22.554 13.7059 22.5555 13.8866C22.3594 13.718 22.138 13.5814 21.8993 13.482C19.8225 12.8959 15.0739 13.3219 9.8085 16.1655C6.04275 18.1988 2.82 18.681 1.78912 18.7886V18.6097ZM20.469 21.0499C19.2735 21.2876 14.3692 22.203 9.873 22.203C7.47525 22.203 5.56538 21.9454 4.19513 21.438C3.66788 21.2426 2.85113 20.8605 1.78912 19.794V19.1269C2.83425 19.02 6.13237 18.534 9.96638 16.4636C15.0735 13.7059 19.7861 13.2574 21.7766 13.7966C21.9881 13.8825 22.29 14.046 22.512 14.3156C22.4228 14.7844 22.1764 15.4436 21.6139 16.3579L21.4961 16.5495C20.979 17.3831 20.5706 18.042 20.5189 19.3792C20.4896 19.9357 20.473 20.4927 20.469 21.0499Z"
    //             fill="#1F1E1E"
    //           />
    //         </g>
    //         <defs>
    //           <clipPath id="clip0_1159_1323">
    //             <rect width="24" height="24" fill="white" />
    //           </clipPath>
    //         </defs>
    //       </svg>
    //     ),
    //   },
    //   {
    //     id: 10,
    //     url: "affiliate",
    //     text: "Affiliate Dashboard",
    //     icon: (
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="25"
    //         height="25"
    //         viewBox="0 0 25 25"
    //         fill="none"
    //       >
    //         <g clip-path="url(#clip0_1159_1345)">
    //           <path
    //             d="M12.5 2.5C18.023 2.5 22.5 6.977 22.5 12.5C22.5015 13.8156 22.2427 15.1185 21.7385 16.3336C21.2342 17.5487 20.4945 18.652 19.562 19.58C19.162 19.98 18.512 19.972 18.122 19.567L17.28 18.694C17.1889 18.5994 17.1172 18.4879 17.0692 18.3656C17.0212 18.2434 16.9977 18.1129 17.0002 17.9816C17.0026 17.8503 17.0308 17.7208 17.0833 17.6004C17.1358 17.48 17.2115 17.3711 17.306 17.28C17.497 17.0959 17.7532 16.9953 18.0184 17.0002C18.1497 17.0026 18.2792 17.0308 18.3996 17.0833C18.52 17.1358 18.6289 17.2114 18.72 17.306L18.818 17.408C19.7364 16.2256 20.3046 14.8092 20.4579 13.3199C20.6113 11.8306 20.3436 10.3282 19.6854 8.98343C19.0272 7.6387 18.0048 6.50567 16.7346 5.71319C15.4643 4.9207 13.9972 4.50057 12.5 4.50057C11.0028 4.50057 9.53569 4.9207 8.26545 5.71319C6.99521 6.50567 5.97285 7.6387 5.31462 8.98343C4.6564 10.3282 4.38874 11.8306 4.54207 13.3199C4.69541 14.8092 5.26359 16.2256 6.18201 17.408L6.28001 17.306C6.37114 17.2114 6.48001 17.1358 6.6004 17.0833C6.72078 17.0308 6.85032 17.0026 6.98162 17.0002C7.11292 16.9977 7.24342 17.0212 7.36565 17.0692C7.48788 17.1172 7.59946 17.1889 7.69401 17.28C7.78856 17.3711 7.86423 17.48 7.91671 17.6004C7.96919 17.7208 7.99744 17.8503 7.99986 17.9816C8.00227 18.1129 7.9788 18.2434 7.93078 18.3656C7.88277 18.4879 7.81114 18.5994 7.72001 18.694L6.87801 19.567C6.78488 19.6634 6.6735 19.7403 6.55035 19.7932C6.42721 19.8461 6.29476 19.874 6.16073 19.8752C6.0267 19.8764 5.89377 19.8509 5.76969 19.8003C5.64561 19.7496 5.53286 19.6747 5.43801 19.58C4.50548 18.652 3.76578 17.5487 3.26154 16.3336C2.75731 15.1185 2.49849 13.8156 2.50001 12.5C2.50001 6.977 6.97701 2.5 12.5 2.5ZM12.5 6.5C12.7652 6.5 13.0196 6.60536 13.2071 6.79289C13.3946 6.98043 13.5 7.23478 13.5 7.5V12.768C13.8813 12.9881 14.1792 13.3279 14.3477 13.7347C14.5162 14.1414 14.5457 14.5924 14.4318 15.0176C14.3178 15.4429 14.0667 15.8187 13.7175 16.0867C13.3682 16.3547 12.9403 16.5 12.5 16.5C12.0598 16.5 11.6318 16.3547 11.2825 16.0867C10.9333 15.8187 10.6822 15.4429 10.5682 15.0176C10.4543 14.5924 10.4838 14.1414 10.6523 13.7347C10.8208 13.3279 11.1187 12.9881 11.5 12.768V7.5C11.5 7.23478 11.6054 6.98043 11.7929 6.79289C11.9804 6.60536 12.2348 6.5 12.5 6.5Z"
    //             fill="black"
    //           />
    //         </g>
    //         <defs>
    //           <clipPath id="clip0_1159_1345">
    //             <rect
    //               width="24"
    //               height="24"
    //               fill="black"
    //               transform="translate(0.5 0.5)"
    //             />
    //           </clipPath>
    //         </defs>
    //       </svg>
    //     ),
    //   },
    //   {
    //     id: 11,
    //     url: "news",
    //     text: "Add News",
    //     icon: (
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="24"
    //         height="25"
    //         viewBox="0 0 24 25"
    //         fill="black"
    //       >
    //         <path
    //           d="M3 4.5V18.5C3 19.0304 3.21071 19.5391 3.58579 19.9142C3.96086 20.2893 4.46957 20.5 5 20.5H19C19.5304 20.5 20.0391 20.2893 20.4142 19.9142C20.7893 19.5391 21 19.0304 21 18.5V8.5H17"
    //           stroke="black"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //         />
    //         <path
    //           d="M3 4.5H17V18.5C17 19.0304 17.2107 19.5391 17.5858 19.9142C17.9609 20.2893 18.4696 20.5 19 20.5M13 8.5H7M13 12.5H9"
    //           stroke="white"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //         />
    //       </svg>
    //     ),
    //   },
  
    //   {
    //     id: 12,
    //     url: "admin",
    //     text: "Add new Admin",
    //     icon: (
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="24"
    //         height="24"
    //         viewBox="0 0 24 24"
    //         fill="black"
    //       >
    //         <path
    //           d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 4.9C12.5933 4.9 13.1734 5.07595 13.6667 5.40559C14.1601 5.73524 14.5446 6.20377 14.7716 6.75195C14.9987 7.30013 15.0581 7.90333 14.9424 8.48527C14.8266 9.06721 14.5409 9.60176 14.1213 10.0213C13.7018 10.4409 13.1672 10.7266 12.5853 10.8424C12.0033 10.9581 11.4001 10.8987 10.8519 10.6716C10.3038 10.4446 9.83524 10.0601 9.50559 9.56671C9.17595 9.07336 9 8.49334 9 7.9C9 7.10435 9.31607 6.34129 9.87868 5.77868C10.4413 5.21607 11.2044 4.9 12 4.9ZM12 12.8C14 12.8 18 13.89 18 15.88C17.3432 16.8701 16.4516 17.6823 15.4047 18.2442C14.3578 18.806 13.1881 19.1 12 19.1C10.8119 19.1 9.64218 18.806 8.59527 18.2442C7.54836 17.6823 6.65677 16.8701 6 15.88C6 13.89 10 12.8 12 12.8Z"
    //           fill="#1F1E1E"
    //         />
    //       </svg>
    //     ),
    //   },
  
      // {
      //   id: 13,
      //   url: "adminofficer",
      //   text: "Admin officer",
      //   icon: (
      //     <svg
      //       xmlns="http://www.w3.org/2000/svg"
      //       width="24"
      //       height="25"
      //       viewBox="0 0 24 25"
      //       fill="black"
      //     >
      //       <path
      //         d="M16.36 13.26C18.31 13.92 20 15 20 16.5V21.5H4V16.5C4 15 5.69 13.92 7.65 13.26L8.27 14.5L8.5 15C7 15.46 5.9 16.12 5.9 16.5V19.6H10.12L11 14.53L10.06 12.65C10.68 12.58 11.33 12.53 12 12.53C12.67 12.53 13.32 12.58 13.94 12.65L13 14.53L13.88 19.6H18.1V16.5C18.1 16.12 17 15.46 15.5 15L15.73 14.5L16.36 13.26ZM12 5.5C10.9 5.5 10 6.4 10 7.5C10 8.6 10.9 9.5 12 9.5C13.1 9.5 14 8.6 14 7.5C14 6.4 13.1 5.5 12 5.5ZM12 11.5C9.79 11.5 8 9.71 8 7.5C8 5.29 9.79 3.5 12 3.5C14.21 3.5 16 5.29 16 7.5C16 9.71 14.21 11.5 12 11.5Z"
      //         fill="black"
      //       />
      //     </svg>
      //   ),
      // },
    // ];
    //if (role === "Director") {
    //   return link3;
   // } else if (role === "admin") {
    //   return links2;
    //}
   return links;
  };
  