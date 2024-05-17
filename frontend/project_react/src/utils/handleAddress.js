export const expandRegionName = (shortName) => {
  const regionMap = {
    강원: '강원도',
    경기: '경기도',
    경남: '경상남도',
    경북: '경상북도',
    광주: '광주광역시',
    대구: '대구광역시',
    대전: '대전광역시',
    부산: '부산광역시',
    서울: '서울특별시',
    세종: '세종특별자치시',
    울산: '울산광역시',
    인천: '인천광역시',
    전남: '전라남도',
    전북: '전라북도',
    제주: '제주특별자치도',
    충남: '충청남도',
    충북: '충청북도',
  };

  // 입력된 짧은 이름을 기반으로 전체 이름을 반환
  return regionMap[shortName] || '알 수 없는 지역';
};