import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedText from "../AnimatedText";
import WorkItem from "./WorkItem";

// sample data for projects with various categories
const data = [
  {
    href: "https://dribbble.com/shots/21149429-Staycation-Website",
    category: "design",
    img: "/assets/work/design-1.png",
    title: "Staycation Web",
  },
  {
    href: "https://dribbble.com/shots/21149388-NFT-Web-Store",
    category: "design",
    img: "/assets/work/design-2.png",
    title: "NFT Web Store",
  },
  {
    href: "https://dribbble.com/shots/22337013-Voucher-Games-Store",
    category: "design",
    img: "/assets/work/design-3.png",
    title: "Voucher Game Store",
  },
  {
    href: "https://dribbble.com/shots/22359070-Furniture-Store-Landing-Page-Design",
    category: "design",
    img: "/assets/work/design-4.png",
    title: "Furniture Store",
  },
  {
    href: "https://dribbble.com/shots/22392840-Hellena-Health-Consultation-Landing-Page",
    category: "design",
    img: "/assets/work/design-5.png",
    title: "Health Consultaion Webpage",
  },
  {
    href: "https://dribbble.com/shots/22932082-Precise-Furniture-Store-Mobile-App",
    category: "design",
    img: "/assets/work/design-6.png",
    title: "Furniture Mobile Design",
  },
  {
    href: "https://dribbble.com/shots/22932082-Precise-Furniture-Store-Mobile-App",
    category: "design",
    img: "/assets/work/design-6.png",
    title: "Furniture Mobile Design",
  },
  {
    href: "https://www.saigonbeautysurgery.com/",
    category: "frontend",
    img: "/assets/work/frontend-6.png",
    title: "Beauty Surgery Website",
  },
  {
    href: "https://www.triartha.com/",
    category: "frontend",
    img: "/assets/work/frontend-5.png",
    title: "Company Profile Website",
  },
  {
    href: "https://storegg-puce.vercel.app",
    category: "frontend",
    img: "/assets/work/frontend-1.png",
    title: "Voucher Game Store Website",
  },
  {
    href: "https://nike-store-lime.vercel.app",
    category: "frontend",
    img: "/assets/work/frontend-2.png",
    title: "Nike Landing Page",
  },
  {
    href: "https://wealthome-rouge.vercel.app",
    category: "frontend",
    img: "/assets/work/frontend-3.png",
    title: "Staycation Landing Page",
  },
  {
    href: "https://volti-nine.vercel.app/",
    category: "frontend",
    img: "/assets/work/frontend-4.png",
    title: "Volti Landing Page",
  },
  {
    href: "https://zoom-clone-alpha-chi.vercel.app/sign-in?redirect_url=https%3A%2F%2Fzoom-clone-alpha-chi.vercel.app%2F",
    category: "fullstack",
    img: "/assets/work/fullstack-1.png",
    title: "Zoom Meeting Clone",
  },
  {
    href: "https://netflix-clone-omega-red.vercel.app",
    category: "fullstack",
    img: "/assets/work/fullstack-2.png",
    title: "Netflix Clone",
  },
  {
    href: "https://flysha.vercel.app",
    category: "fullstack",
    img: "/assets/work/fullstack-3.png",
    title: "Flight Booking Website",
  },
  {
    href: "https://belanja-ten.vercel.app",
    category: "fullstack",
    img: "/assets/work/fullstack-4.png",
    title: "E-commerce Website",
  },
];

const Work = () => {
  // extract unique categories from the data
  const uniqueCategories = Array.from(
    new Set(data.map((item) => item.category))
  );

  // create tab data with "all" category and unique categories from data
  const tabData = [
    { category: "all" },
    ...uniqueCategories.map((category) => ({ category })),
  ];

  // state to manage the currently selected tab
  const [tabValue, setTabValue] = useState("all");
  // number of items to show initially
  const [visibleItems, setVisibleItems] = useState(6);

  //filter work items based on the selected tab
  const filterWork =
    tabValue === "all"
      ? data.filter((item) => item.category !== "all")
      : data.filter((item) => item.category === tabValue);

  // handle loading more items
  const loadMoreItems = () => {
    //adjust the number to control how many items are loaded at a time
    setVisibleItems((prev) => prev + 2);
  };

  return (
    <section className="pt-24 min-h-[1000px]" id="work">
      <div className="container mx-auto">
        <Tabs defaultValue="all" className="w-full flex flex-col">
          <div
            className="flex flex-col xl:flex-row items-center xl:items-start
            xl:justify-between mb-[30px]"
          >
            <AnimatedText
              text="My Latest Work"
              textStyles="h2 mb-[30px] xl:mb-0"
            />
            {/* render tab triggers */}
            <TabsList
              className="max-w-max h-full mb-[30px] flex flex-col md:flex-row
            gap-4 md:gap-0"
            >
              {tabData.map((item, index) => {
                return (
                  <TabsTrigger
                    value={item.category}
                    key={index}
                    className="capitalize w-[120px]"
                    onClick={() => setTabValue(item.category)}
                  >
                    {item.category}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {/* render content for the selected tab */}
          <TabsContent value={tabValue} className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
              <AnimatePresence>
                {filterWork.slice(0, visibleItems).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <WorkItem {...item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            {/* load more button */}
            {visibleItems < filterWork.length && (
              <div className="flex justify-center mt-12">
                <button onClick={loadMoreItems} className="btn btn-accent">
                  Load more
                </button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Work;
