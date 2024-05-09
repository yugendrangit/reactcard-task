import React from "react";
import Card from "./Components/Card/Card";

const App = () => {
  const data = [
    {
      title: "FREE",
      price: "$0/month",
      user: "Single User",
      storage: "50GB Storage",
      project: "Unlimited Public Project",
      community: "Community Access",
      private: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      domain: "Free Domain",
      status: "Monthly Status Reports",
      IsprivateProject: false,
      Issupport: false,
      Isdomain: false,
      Isstatus: false,
    },
    {
      title: "PLUS",
      price: "$9/month",
      user: "5 Users",
      storage: "50GB Storage",
      project: "Unlimited Public Project",
      community: "Community Access",
      private: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      domain: "Free Domain",
      status: "Monthly Status Reports",
      IsprivateProject: true,
      Issupport: true,
      Isdomain: true,
      Isstatus: false,
    },
    {
      title: "PRO",
      price: "$49/month",
      user: "Unlimited Users",
      storage: "50GB Storage",
      project: "Unlimited Public Project",
      community: "Community Access",
      private: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      domain: "Free Domain",
      status: "Monthly Status Reports",
      IsprivateProject: true,
      Issupport: true,
      Isdomain: true,
      Isstatus: true,
    },
  ];

  return (
    <div>
      <Card data={data} />
    </div>
  );
};

export default App;
