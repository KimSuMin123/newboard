const PetMeetingBestShow = () => {
  return (
    <div>
      <div id="BestPetShow">
        <div className="BestPetShowTitle">
          <p id="BestPetShowText1">베스트 펫 자랑</p>
          <a href="/PetMeetingPetShow">
            <p id="BestPetShowText2">더보기 &nbsp; +</p>
          </a>

        </div>
        <div className="BestPetShowPreview">
          <div id="BestPetShowPreview1">
            <img id="BestPetShowPreviewImg" src={Pet1}/>
            <p id="BestPetShowPreviewText">우리집 개냥이들 사진!!</p>
          </div>
          <div id="BestPetShowPreview2">
            <img id="BestPetShowPreviewImg" src={Cat2}/>
            <p id="BestPetShowPreviewText">간식 달라고 쳐다보는 고양이 눈빛!!</p>
          </div>
          <div id="BestPetShowPreview2">
            <img id="BestPetShowPreviewImg" src={Pet1}/>
            <p id="BestPetShowPreviewText">우리집 개냥이들 사진!!</p>
          </div>
          <div id="BestPetShowPreview2">
            <img id="BestPetShowPreviewImg" src={Cat2}/>
            <p id="BestPetShowPreviewText">간식 달라고 쳐다보는 고양이 눈빛!!</p>
          </div>
        </div>
      </div>
      <div className="BestPetMarket">
        <div className="BestPetMarketTitle">
          <p id="BestPetMarketText1">베스트 커뮤니티 글</p>
          <a href="/PetMeetingMarket">
            <p id="BestPetMarketText2">더보기 &nbsp; +</p>
          </a>
        </div>
        <div className="BestPetMarketPreview">
          <div id="BestPetMarketPreview1">
            <img id="BestPetMarketPreviewImg" src={CatFood1}/>
            <p id="BestPetMarketPreviewText">(미개봉)고양이 사료<br/>10000원</p>
          </div>
          <div id="BestPetMarketPreview2">
            <img id="BestPetMarketPreviewImg" src={CatTower1}/>
            <p id="BestPetMarketPreviewText">(실사용 1회) 캣타워<br/>50000원</p>
          </div>
          <div id="BestPetMarketPreview2">
            <img id="BestPetMarketPreviewImg" src={CatFood1}/>
            <p id="BestPetMarketPreviewText">(미개봉) 고양이 사료<br/>10000원</p>
          </div>
          <div id="BestPetMarketPreview2">
            <img id="BestPetMarketPreviewImg" src={CatTower1}/>
            <p id="BestPetMarketPreviewText">(실사용 1회) 캣타워<br/>50000원</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PetMeetingBestShow