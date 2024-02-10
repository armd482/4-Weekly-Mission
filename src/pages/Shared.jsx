import React, { useEffect, useState } from "react";
import { getFolder, getUser } from "../api";
import useAsync from "../components/hooks/useAsync";

// components
import Footer from "../components/common/footer/Footer";
import Header from "../components/common/header/Header";
import CardList from "../components/shared/CardList";
import SearchBar from "../components/common/searchBar/SearchBar";
import SharedInfo from "../components/shared/SharedInfo";

// style
import "../pages/Shared.css";

const Shared = () => {
  const [items, setItems] = useState([]);
  const [folderInfo, setFolderInfo] = useState("");
  const [folderName, setFolderName] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const [order] = useState("createdAt");

  const [isFolderLoading, folderLoadingError, getReviewsAsync] =
    useAsync(getFolder);
  const [isUserLoading, userLoadingError, getUserAsync] = useAsync(getUser);

  const sortedItems = items.sort((a, b) => b[order].localeCompare(a[order]));

  // 카드 아이템 요청
  const handleLoadItems = async () => {
    let result = await getReviewsAsync();
    if (!result) return;

    const { links, owner, name } = result.folder;
    setItems(links);
    setFolderInfo(owner);
    setFolderName(name);
  };

  // 유저 정보 요청
  const handleLoadUser = async () => {
    let result = await getUserAsync();
    if (!result) return;

    setUserInfo(result);
  };

  useEffect(() => {
    handleLoadItems();
    handleLoadUser();
  }, []);

  return (
    <div className="Shared">
      <Header userInfo={userInfo} />
      <div className="Shared-main">
        <SharedInfo
          folderInfo={folderInfo}
          folderName={folderName}
          folderLoadingError={folderLoadingError}
        />
        <div className="Shared-content-wrapper">
          <SearchBar />
          <CardList items={sortedItems} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shared;
