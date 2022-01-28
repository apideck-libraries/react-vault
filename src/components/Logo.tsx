import React from 'react';

const Logo = ({ className = '' }) => {
  return (
    <svg
      width={95}
      height={23}
      viewBox="0 0 95 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.2 15.05C1.25 14.2167 1.45833 13.525 1.825 12.975C2.19167 12.425 2.65833 11.9833 3.225 11.65C3.79167 11.3167 4.425 11.0833 5.125 10.95C5.84167 10.8 6.55833 10.725 7.275 10.725C7.925 10.725 8.58333 10.775 9.25 10.875C9.91667 10.9583 10.525 11.1333 11.075 11.4C11.625 11.6667 12.075 12.0417 12.425 12.525C12.775 12.9917 12.95 13.6167 12.95 14.4V21.125C12.95 21.7083 12.9833 22.2667 13.05 22.8C13.1167 23.3333 13.2333 23.7333 13.4 24H9.8C9.73333 23.8 9.675 23.6 9.625 23.4C9.59167 23.1833 9.56667 22.9667 9.55 22.75C8.98333 23.3333 8.31667 23.7417 7.55 23.975C6.78333 24.2083 6 24.325 5.2 24.325C4.58333 24.325 4.00833 24.25 3.475 24.1C2.94167 23.95 2.475 23.7167 2.075 23.4C1.675 23.0833 1.35833 22.6833 1.125 22.2C0.908333 21.7167 0.8 21.1417 0.8 20.475C0.8 19.7417 0.925 19.1417 1.175 18.675C1.44167 18.1917 1.775 17.8083 2.175 17.525C2.59167 17.2417 3.05833 17.0333 3.575 16.9C4.10833 16.75 4.64167 16.6333 5.175 16.55C5.70833 16.4667 6.23333 16.4 6.75 16.35C7.26667 16.3 7.725 16.225 8.125 16.125C8.525 16.025 8.84167 15.8833 9.075 15.7C9.30833 15.5 9.41667 15.2167 9.4 14.85C9.4 14.4667 9.33333 14.1667 9.2 13.95C9.08333 13.7167 8.91667 13.5417 8.7 13.425C8.5 13.2917 8.25833 13.2083 7.975 13.175C7.70833 13.125 7.41667 13.1 7.1 13.1C6.4 13.1 5.85 13.25 5.45 13.55C5.05 13.85 4.81667 14.35 4.75 15.05H1.2ZM9.4 17.675C9.25 17.8083 9.05833 17.9167 8.825 18C8.60833 18.0667 8.36667 18.125 8.1 18.175C7.85 18.225 7.58333 18.2667 7.3 18.3C7.01667 18.3333 6.73333 18.375 6.45 18.425C6.18333 18.475 5.91667 18.5417 5.65 18.625C5.4 18.7083 5.175 18.825 4.975 18.975C4.79167 19.1083 4.64167 19.2833 4.525 19.5C4.40833 19.7167 4.35 19.9917 4.35 20.325C4.35 20.6417 4.40833 20.9083 4.525 21.125C4.64167 21.3417 4.8 21.5167 5 21.65C5.2 21.7667 5.43333 21.85 5.7 21.9C5.96667 21.95 6.24167 21.975 6.525 21.975C7.225 21.975 7.76667 21.8583 8.15 21.625C8.53333 21.3917 8.81667 21.1167 9 20.8C9.18333 20.4667 9.29167 20.1333 9.325 19.8C9.375 19.4667 9.4 19.2 9.4 19V17.675ZM22.2305 21.675C21.6638 21.675 21.1805 21.5583 20.7805 21.325C20.3805 21.0917 20.0555 20.7917 19.8055 20.425C19.5721 20.0417 19.3971 19.6 19.2805 19.1C19.1805 18.6 19.1305 18.0917 19.1305 17.575C19.1305 17.0417 19.1805 16.525 19.2805 16.025C19.3805 15.525 19.5471 15.0833 19.7805 14.7C20.0305 14.3167 20.3471 14.0083 20.7305 13.775C21.1305 13.525 21.6221 13.4 22.2055 13.4C22.7721 13.4 23.2471 13.525 23.6305 13.775C24.0305 14.0083 24.3555 14.325 24.6055 14.725C24.8555 15.1083 25.0305 15.55 25.1305 16.05C25.2471 16.55 25.3055 17.0583 25.3055 17.575C25.3055 18.0917 25.2555 18.6 25.1555 19.1C25.0555 19.6 24.8805 20.0417 24.6305 20.425C24.3971 20.7917 24.0805 21.0917 23.6805 21.325C23.2971 21.5583 22.8138 21.675 22.2305 21.675ZM15.7055 11.075V28.525H19.2555V22.4H19.3055C19.7388 23.0333 20.2888 23.5167 20.9555 23.85C21.6388 24.1667 22.3805 24.325 23.1805 24.325C24.1305 24.325 24.9555 24.1417 25.6555 23.775C26.3721 23.4083 26.9638 22.9167 27.4305 22.3C27.9138 21.6833 28.2721 20.975 28.5055 20.175C28.7388 19.375 28.8555 18.5417 28.8555 17.675C28.8555 16.7583 28.7388 15.8833 28.5055 15.05C28.2721 14.2 27.9138 13.4583 27.4305 12.825C26.9471 12.1917 26.3388 11.6833 25.6055 11.3C24.8721 10.9167 23.9971 10.725 22.9805 10.725C22.1805 10.725 21.4471 10.8833 20.7805 11.2C20.1138 11.5167 19.5638 12.025 19.1305 12.725H19.0805V11.075H15.7055ZM34.6387 9.075V6.15H31.0887V9.075H34.6387ZM31.0887 11.075V24H34.6387V11.075H31.0887ZM46.609 17.5C46.609 18.0333 46.559 18.55 46.459 19.05C46.359 19.55 46.1923 20 45.959 20.4C45.7257 20.7833 45.409 21.0917 45.009 21.325C44.6257 21.5583 44.1423 21.675 43.559 21.675C43.009 21.675 42.534 21.5583 42.134 21.325C41.7507 21.075 41.4257 20.7583 41.159 20.375C40.909 19.975 40.7257 19.525 40.609 19.025C40.4923 18.525 40.434 18.025 40.434 17.525C40.434 16.9917 40.484 16.4833 40.584 16C40.7007 15.5 40.8757 15.0583 41.109 14.675C41.359 14.2917 41.684 13.9833 42.084 13.75C42.484 13.5167 42.9757 13.4 43.559 13.4C44.1423 13.4 44.6257 13.5167 45.009 13.75C45.3923 13.9833 45.7007 14.2917 45.934 14.675C46.184 15.0417 46.359 15.475 46.459 15.975C46.559 16.4583 46.609 16.9667 46.609 17.5ZM46.659 22.35V24H50.034V6.15H46.484V12.65H46.434C46.034 12.0167 45.484 11.5417 44.784 11.225C44.1007 10.8917 43.3757 10.725 42.609 10.725C41.659 10.725 40.8257 10.9167 40.109 11.3C39.3923 11.6667 38.7923 12.1583 38.309 12.775C37.8423 13.3917 37.484 14.1083 37.234 14.925C37.0007 15.725 36.884 16.5583 36.884 17.425C36.884 18.325 37.0007 19.1917 37.234 20.025C37.484 20.8583 37.8423 21.6 38.309 22.25C38.7923 22.8833 39.4007 23.3917 40.134 23.775C40.8673 24.1417 41.7173 24.325 42.684 24.325C43.534 24.325 44.2923 24.175 44.959 23.875C45.6423 23.5583 46.1923 23.05 46.609 22.35H46.659ZM61.4172 16.15H55.6422C55.6589 15.9 55.7089 15.6167 55.7922 15.3C55.8922 14.9833 56.0505 14.6833 56.2672 14.4C56.5005 14.1167 56.8005 13.8833 57.1672 13.7C57.5505 13.5 58.0255 13.4 58.5922 13.4C59.4589 13.4 60.1005 13.6333 60.5172 14.1C60.9505 14.5667 61.2505 15.25 61.4172 16.15ZM55.6422 18.4H64.9672C65.0339 17.4 64.9505 16.4417 64.7172 15.525C64.4839 14.6083 64.1005 13.7917 63.5672 13.075C63.0505 12.3583 62.3839 11.7917 61.5672 11.375C60.7505 10.9417 59.7922 10.725 58.6922 10.725C57.7089 10.725 56.8089 10.9 55.9922 11.25C55.1922 11.6 54.5005 12.0833 53.9172 12.7C53.3339 13.3 52.8839 14.0167 52.5672 14.85C52.2505 15.6833 52.0922 16.5833 52.0922 17.55C52.0922 18.55 52.2422 19.4667 52.5422 20.3C52.8589 21.1333 53.3005 21.85 53.8672 22.45C54.4339 23.05 55.1255 23.5167 55.9422 23.85C56.7589 24.1667 57.6755 24.325 58.6922 24.325C60.1589 24.325 61.4089 23.9917 62.4422 23.325C63.4755 22.6583 64.2422 21.55 64.7422 20H61.6172C61.5005 20.4 61.1839 20.7833 60.6672 21.15C60.1505 21.5 59.5339 21.675 58.8172 21.675C57.8172 21.675 57.0505 21.4167 56.5172 20.9C55.9839 20.3833 55.6922 19.55 55.6422 18.4ZM75.8727 15.625H79.3477C79.2977 14.7917 79.0977 14.075 78.7477 13.475C78.3977 12.8583 77.9393 12.35 77.3727 11.95C76.8227 11.5333 76.1893 11.225 75.4727 11.025C74.7727 10.825 74.0393 10.725 73.2727 10.725C72.2227 10.725 71.2893 10.9 70.4727 11.25C69.656 11.6 68.9643 12.0917 68.3977 12.725C67.831 13.3417 67.3977 14.0833 67.0977 14.95C66.8143 15.8 66.6727 16.725 66.6727 17.725C66.6727 18.6917 66.831 19.5833 67.1477 20.4C67.4643 21.2 67.906 21.8917 68.4727 22.475C69.0393 23.0583 69.7227 23.5167 70.5227 23.85C71.3393 24.1667 72.231 24.325 73.1977 24.325C74.9143 24.325 76.3227 23.875 77.4227 22.975C78.5227 22.075 79.1893 20.7667 79.4227 19.05H75.9977C75.881 19.85 75.5893 20.4917 75.1227 20.975C74.6727 21.4417 74.0227 21.675 73.1727 21.675C72.6227 21.675 72.156 21.55 71.7727 21.3C71.3893 21.05 71.081 20.7333 70.8477 20.35C70.631 19.95 70.4727 19.5083 70.3727 19.025C70.2727 18.5417 70.2227 18.0667 70.2227 17.6C70.2227 17.1167 70.2727 16.6333 70.3727 16.15C70.4727 15.65 70.6393 15.2 70.8727 14.8C71.1227 14.3833 71.4393 14.05 71.8227 13.8C72.206 13.5333 72.681 13.4 73.2477 13.4C74.7643 13.4 75.6393 14.1417 75.8727 15.625ZM81.7531 6.15V24H85.3031V19.55L86.6781 18.225L90.2281 24H94.5281L89.1031 15.825L93.9781 11.075H89.7781L85.3031 15.725V6.15H81.7531Z"
        transform="translate(0 -6)"
        fill="white"
      />
    </svg>
  );
};
export default Logo;