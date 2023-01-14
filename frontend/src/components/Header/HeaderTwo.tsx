import { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
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
import LoginSidebar from "../LoginRegister/LoginSidebar";
import { useSelector } from "react-redux";

const HeaderTwo = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const [isOpenSearchProduct, setIsOpenSearchProduct] = useState(false);
  const [showMyAccountMenu, setShowMyAccountMenu] = useState(false);
  const [showCardView, setShowCardView] = useState(false);
  const [showLoginSideBar, setShowLoginSideBar] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const { isAuthenticated, user } = useSelector((state: any) => state.user);

  const navigate = useNavigate();

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

  return (
    <AnimatePresence>
      <motion.div
        // initial={{ y: -30, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // exit={{ y: 0, opacity: 1 }}
        // transition={{ duration: 0.3 }}
        className="navbarTwo"
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
                      <NavLink style={{ color: "#0F172A" }} to={menu.path}>
                        {menu.name}
                      </NavLink>
                    </ListElement>
                  ))}
                </div>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconListWrapper>
                  {!isAuthenticated && (
                    <IconListElement>
                      <Typography onClick={() => setShowLoginSideBar(true)}>
                        Login / Register
                      </Typography>
                    </IconListElement>
                  )}
                  <IconListElement onClick={() => setIsOpenSearchProduct(true)}>
                    <i
                      style={{ fontSize: "20px" }}
                      className="ri-search-line"
                    ></i>
                  </IconListElement>
                  <IconListElement onClick={() => navigate("/wishlist")}>
                    <i
                      style={{ fontSize: "20px" }}
                      className="ri-heart-2-line"
                    ></i>
                  </IconListElement>
                  <IconListElement
                    onClick={() => setShowCardView((state) => !state)}
                  >
                    <i
                      style={{ fontSize: "20px" }}
                      className="ri-shopping-cart-line"
                    ></i>
                  </IconListElement>
                  {isAuthenticated && (
                    <IconListElement
                      onClick={() => setShowMyAccountMenu((state) => !state)}
                    >
                      <i
                        style={{ fontSize: "20px" }}
                        className="ri-user-line"
                      ></i>
                      <AnimatePresence>
                        {showMyAccountMenu && (
                          <motion.div
                            variants={menuAnimation}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                          >
                            <MyAccountMenu user={user} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </IconListElement>
                  )}
                </IconListWrapper>
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
            <motion.div
              variants={cardViewAnimation}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <LoginSidebar
                showLoginSideBar={showLoginSideBar}
                setShowLoginSideBar={setShowLoginSideBar}
              />
            </motion.div>
          </Container>
        </BottomHeaderRoot>
      </motion.div>
    </AnimatePresence>
  );
};

export default HeaderTwo;
