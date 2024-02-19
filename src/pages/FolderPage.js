import { useEffect, useState } from 'react';
import SearchTopBodyArea from '../pages/SearchTopBodyArea';
import ContentsArea from '../pages/ContentsArea';
import PopAddFolderButton from '../components/PopAddFolderButton';
import ListTitleArea from '../components/ListTitleArea';
import FolderNames from '../components/FolderNames';
import addIcon from '../assets/purple_add.svg';
import { getFolders } from '../utils/apis';
import { getLinks } from '../utils/apis';

const FolderPage = () => {
  const [foldersList, setFoldersList] = useState([]);
  const [linkList, setLinkList] = useState({});
  const [displayPopButton, setDisplayPopButton] = useState(false);
  const [selectFolderName, setSelectFolderName] = useState('');
  const [selectFolder, setSelectFolder] = useState(false);
  const userId = '4';

  const handleLoad = async () => {
    const { data } = await getLinks(userId, '');
    const folders = await getFolders(userId);

    setFoldersList([{ name: '전체', id: 'all' }, ...folders.data]);
    setLinkList({ links: [...data] });
    setDisplayPopButton(linkList.links?.length >= 1 && true);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  const handleOnClick = async (folderName, list = []) => {
    setSelectFolderName(folderName);
    setLinkList({ links: [...list] });
    setDisplayPopButton(list.length >= 1 && true);
  };

  return (
    <>
      <SearchTopBodyArea></SearchTopBodyArea>
      {linkList.links && (
        <ContentsArea links={linkList.links}>
          {foldersList.length > 0 && (
            <>
              <div className="folder_button_area">
                <div className="folder_buttons_area">
                  {foldersList &&
                    foldersList.map((folder) => {
                      return (
                        <FolderNames
                          selectFolder={selectFolder}
                          setSelectFolder={setSelectFolder}
                          name={folder.name}
                          key={folder.id}
                          id={folder.id}
                          userId={userId}
                          onClick={handleOnClick}
                        ></FolderNames>
                      );
                    })}
                </div>
                <div className="add_folder_text_area">
                  <p className="add_folder_text">폴더추가</p>
                  <img src={addIcon} />
                </div>
              </div>
            </>
          )}
          <ListTitleArea title={selectFolderName}></ListTitleArea>
        </ContentsArea>
      )}
      {displayPopButton && <PopAddFolderButton></PopAddFolderButton>}
    </>
  );
};

export default FolderPage;
