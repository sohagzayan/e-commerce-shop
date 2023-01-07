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
import { useDispatch, useSelector } from "react-redux";

const BottomHeader = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const [isOpenSearchProduct, setIsOpenSearchProduct] = useState(false);
  const [showMyAccountMenu, setShowMyAccountMenu] = useState(false);
  const [showCardView, setShowCardView] = useState(false);
  const [showLoginSideBar, setShowLoginSideBar] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { isAuthenticated, user } = useSelector((state) => state.user);

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
        className={navbar ? "navbar active" : "navbar"}
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
                      <NavLink style={{ color: "0F172A" }} to={menu.path}>
                        {menu.name}
                      </NavLink>
                    </ListElement>
                  ))}
                </div>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconListWrapper>
                  {/* {!isAuthenticated && (
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
                  )} */}

                  <IconListElement
                    className="onActiveIconLook"
                    onClick={() => setIsOpenSearchProduct(true)}
                  >
                    <i
                      style={{ fontSize: "20px", color: "#232323" }}
                      className="ri-search-line"
                    ></i>
                  </IconListElement>
                  <IconListElement
                    className="onActiveIconLook"
                    onClick={() => navigate("/wishlist")}
                  >
                    <i
                      style={{ fontSize: "20px", color: "#232323" }}
                      className="ri-heart-2-line"
                    ></i>
                  </IconListElement>
                  <IconListElement
                    className="onActiveIconLook"
                    onClick={() => setShowCardView((state) => !state)}
                  >
                    <i
                      style={{ fontSize: "20px", color: "#232323" }}
                      className="ri-shopping-cart-line"
                    ></i>
                  </IconListElement>
                  {/* {isAuthenticated && (
                    <IconListElement>
                      <img
                        onClick={() => setShowMyAccountMenu((state) => !state)}
                        style={{
                          width: "40px",
                          borderRadius: "50%",
                          border: "3px solid #cbd3d9",
                        }}
                        src={user.avatar.url}
                        alt="avater"
                      />
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
                  )} */}
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

export default BottomHeader;
