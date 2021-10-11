import React from "react";
import styled from "styled-components/macro";
import { navBarColor } from "variable/variable";
import navBarLogo from "assets/navBar-logo.svg";
import portrait from "assets/portrait.svg";
import { ReactComponent as Search } from "assets/search.svg";
import filter from "assets/filter.svg";
import favorites from "assets/favorites.svg";
import calender from "assets/calendar.svg";
import camera from "assets/camera.svg";
import setting from "assets/setting.svg";
import Space from "layouts/Space";
import JauntCircleButton from "components/JauntCircleButton";
import SearchBar from "components/SearchBar";

const NavBarStyle = {
  backgroundColor: navBarColor,
  opacity: 0.8,
};

const NavBar = (props) => {
  const { className } = props;
  return (
    <Space style={NavBarStyle} className={className}>
      <Container>
        <Wrap>
          <Logo src={navBarLogo} />
          <Tools>
            <MemberButton icon={portrait} />
            <SearchBar />
            <FilterButton icon={filter} selected={true} />
          </Tools>
          <Options>
            <SearchButton>
              <Search fill="red" />
            </SearchButton>
            <FavButton icon={favorites} />
            <CalenderButton icon={calender} />
            <CameraButton icon={camera} />
            <SettingButton icon={setting} />
          </Options>
        </Wrap>
      </Container>
    </Space>
  );
};

const Container = styled.section`
  padding: 18px 0px;
`;

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Logo = styled.img``;

const MemberButton = styled(JauntCircleButton)`
  margin-right: 12px;
`;

const FilterButton = styled(JauntCircleButton)`
  margin-left: 12px;
  padding: 14px;
`;

const Tools = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
`;

const Options = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const SearchButton = styled(JauntCircleButton)`
  margin: 0px 6px;
`;

const FavButton = styled(JauntCircleButton)`
  margin: 0px 6px;
`;

const CalenderButton = styled(JauntCircleButton)`
  margin: 0px 6px;
`;

const CameraButton = styled(JauntCircleButton)`
  margin: 0px 6px;
`;

const SettingButton = styled(JauntCircleButton)`
  margin: 0px 6px;
`;

export default NavBar;
