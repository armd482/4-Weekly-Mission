import { Link } from 'react-router-dom';
import MainImg from '../../assets/main.png';
function MainTitle() {
  return (
      <main>
        <div className='mainWrap'>
          <h1 className='mainTitle'>
            <span className='mainTitleEffect'>세상의 모든 정보</span>를 <br className='mobileLine' />
            쉽게 저장하고 <br className='mainTitleLine' />
            관리해 보세요
          </h1>
          <Link className='loginBtn' to='/signin'>
            링크 추가하기
          </Link>
          <img src={MainImg} alt='메인 이미지' />
        </div>
      </main>
  );
}

export default MainTitle;
