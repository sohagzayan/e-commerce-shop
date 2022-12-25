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

const HeaderTwo = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const [isOpenSearchProduct, setIsOpenSearchProduct] = useState(false);
  const [showMyAccountMenu, setShowMyAccountMenu] = useState(false);
  const [showCardView, setShowCardView] = useState(false);
  const [showLoginSideBar, setShowLoginSideBar] = useState(false);
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

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
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
                      <NavLink to={menu.path}>{menu.name}</NavLink>
                    </ListElement>
                  ))}
                </div>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconListWrapper>
                  <IconListElement>
                    <Typography
                      onClick={() => setShowLoginSideBar(true)}
                      sx={{
                        fontSize: "15px",
                        color: "#232323",
                        ":hover": {
                          color: "#535353",
                        },
                      }}
                    >
                      Login / Register
                    </Typography>
                  </IconListElement>
                  <IconListElement>
                    <SearchIcon
                      onClick={() => setIsOpenSearchProduct(true)}
                      sx={{ fontSize: "23px", color: "#232323" }}
                    />
                  </IconListElement>
                  <IconListElement>
                    <FavoriteBorderIcon
                      onClick={() => navigate("/wishlist")}
                      sx={{ fontSize: "23px", color: "#232323" }}
                    />
                  </IconListElement>
                  <IconListElement>
                    <ShoppingCartOutlinedIcon
                      onClick={() => setShowCardView((state) => !state)}
                      sx={{ fontSize: "23px", color: "#232323" }}
                    />
                  </IconListElement>
                  <IconListElement>
                    <ContactsIcon
                      onClick={() => setShowMyAccountMenu((state) => !state)}
                      sx={{ fontSize: "23px", color: "#232323" }}
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
                  {/* <UsdAndLan menu={usd} />
                  <UsdAndLan menu={lan} /> */}
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
