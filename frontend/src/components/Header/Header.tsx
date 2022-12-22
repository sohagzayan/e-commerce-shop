import { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import { headerMenu } from "../../util/HeaderMenu";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ContactsIcon from "@mui/icons-material/Contacts";
import UsdAndLan from "./UsdAndLan";
import Hamburger from "hamburger-react";
import MobileMenuSidebar from "./MobileMenuSidebar";
import logo from "../../assets/logo.png";
import { AnimatePresence, motion } from "framer-motion";
import MyAccountMenu from "../MyAccount/MyAccountMenu";
import { NavLink, useNavigate } from "react-router-dom";
import {
  BottomHeaderRoot,
  BottomHeaderWrapper,
  Logo,
  ListElement,
  IconListWrapper,
  IconListElement,
  UsdLanOptionWrapper,
  MenuHamburger,
} from "../../style/Header/Header";
import CardView from "../CardView/CardView";
import SearchProduct from "../SearchProduct/SearchProduct";

const BottomHeader = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const [isOpenSearchProduct, setIsOpenSearchProduct] = useState(false);
  const [showMyAccountMenu, setShowMyAccountMenu] = useState(false);
  const [showCardView, setShowCardView] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();
  const usd: string[] = ["USD", "AUD", "EUR"];
  const lan: string[] = ["EN", "ARB", "SPN"];

  const menuAnimation = {
    hidden: {
      opacity: 0,
      y: 60,
      transition: { duration: 0.3 },
    },
    show: {
      opacity: 1,
      y: 25,
      transition: { duration: 0.3 },
    },
  };

  const cardViewAnimation = {
    hidden: {
      opacity: 0,
      y: 0,
      transition: { duration: 0.3 },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    });
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={navbar ? "navbar active" : "navbar "}
      >
        <BottomHeaderRoot>
          <Container maxWidth="lg">
            <BottomHeaderWrapper>
              <Box sx={{ display: "flex" }}>
                <Box>
                  <Logo src={logo} alt="logo" />
                </Box>

                <div className="listWrapperMenu">
                  {headerMenu.map((menu, index) => (
                    <ListElement key={index}>
                      <NavLink to={menu.path}>{menu.name}</NavLink>
                    </ListElement>
                  ))}
                </div>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconListWrapper>
                  <IconListElement>
                    <SearchIcon
                      onClick={() => setIsOpenSearchProduct(true)}
                      sx={{ fontSize: "23px", color: "#80808d" }}
                    />
                  </IconListElement>
                  <IconListElement>
                    <FavoriteBorderIcon
                      onClick={() => navigate("/wishlist")}
                      sx={{ fontSize: "23px", color: "#80808d" }}
                    />
                  </IconListElement>
                  <IconListElement>
                    <ShoppingCartOutlinedIcon
                      onClick={() => setShowCardView((state) => !state)}
                      sx={{ fontSize: "23px", color: "#80808d" }}
                    />
                  </IconListElement>
                  <IconListElement>
                    <ContactsIcon
                      onClick={() => setShowMyAccountMenu((state) => !state)}
                      sx={{ fontSize: "23px", color: "#80808d" }}
                    />
                    <AnimatePresence>
                      {showMyAccountMenu && (
                        <motion.div
                          variants={menuAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                        >
                          <MyAccountMenu />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </IconListElement>
                </IconListWrapper>
                <UsdLanOptionWrapper>
                  <UsdAndLan menu={usd} />
                  <UsdAndLan menu={lan} />
                </UsdLanOptionWrapper>
                <MenuHamburger>
                  <Hamburger
                    easing="ease-in"
                    size={26}
                    toggled={isOpenSideBar}
                    toggle={setIsOpenSideBar}
                  />
                </MenuHamburger>
              </Box>
            </BottomHeaderWrapper>
            <MobileMenuSidebar
              setIsOpenSideBar={setIsOpenSideBar}
              isOpenSideBar={isOpenSideBar}
            />

            <motion.div
              variants={cardViewAnimation}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <CardView
                showCardView={showCardView}
                setShowCardView={setShowCardView}
              />
            </motion.div>
            <motion.div>
              <SearchProduct
                setIsOpenSearchProduct={setIsOpenSearchProduct}
                isOpenSearchProduct={isOpenSearchProduct}
              />
            </motion.div>
          </Container>
        </BottomHeaderRoot>
      </motion.div>
    </AnimatePresence>
  );
};

export default BottomHeader;
