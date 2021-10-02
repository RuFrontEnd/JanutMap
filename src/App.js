import React, { useState, useEffect, lazy, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  login,
  logout,
  setCurrentUser,
  setCurrentUserData,
} from "redux/member/memberActions"; // 判斷是否 login 的狀態

// import Navbar from "components/navBar/NavBar";
// import Footer from "components/footer/Footer";
// import HomePage from "pages/homePage/HomePage";

// 引入 所有人的總元件
// const page = lazy(() => import("pages/page/page"));

// 路由表
function App() {
  const dispatch = useDispatch();
  // const isLogin = useSelector((state) => state.member.isLogin);

  // if (isLogin === null) {
  //   return <></>;
  // }

  return (
    <Router>
      <>
        {/* <Navbar
          style={{ display: !showNavBar && "none" }}
          cartNumber={cartNumber}
          amount={amount}
          setShowLoginModal={setShowLoginModal}
          setShowSuccessBox={setShowSuccessBox}
          showLoginModal={showLoginModal}
        />
        <LoginModal
          showLoginModal={showLoginModal}
          setShowLoginModal={setShowLoginModal}
          showSuccessBox={showSuccessBox}
          setShowSuccessBox={setShowSuccessBox}
        /> */}
        <Suspense
        // fallback={<FallBack />}
        >
          <Switch>
            {/* 首頁 */}
            <Route exact path="/">
              {/* <HomePage
                takeOrNot={takeOrNot}
                setTakeOrNot={setTakeOrNot}
                selectDate={selectDate}
                setSelectDate={setSelectDate}
                slecteTime={slecteTime}
                setSelectTime={setSelectTime}
                setShowBar={setShowBar}
                county={county}
                setCounty={setCounty}
                township={township}
                setTownship={setTownship}
                address={address}
                setAddress={setAddress}
              /> */}
            </Route>
          </Switch>
        </Suspense>
        {/* <Footer /> */}
      </>
    </Router>
  );
}

export default App;
