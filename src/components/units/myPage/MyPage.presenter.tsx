import { NumberComma } from "../../../commons/libraries/comma";
import { Card, Img, Name, Price, Wrapper } from "./MyPage.styles";
import { IMyPageUIProps } from "./MyPage.types";
import MyPageNav from "./myPageNav/MyPageNav";

export default function MyPageUI(props: IMyPageUIProps) {
  return (
    <>
      <MyPageNav />
      <Wrapper>
        {props.myPickData?.fetchUseditemsIPicked.map((el) => (
          <Card>
            <div key={el._id}>
              <Img
                src={
                  el.images?.filter((el) => el).length === 0
                    ? "https://i.esdrop.com/d/f/eJqYA2AGQd/O4upHK1edJ.gif"
                    : `https://storage.googleapis.com/${el.images?.filter((el) => el)[0]}`
                }
              />
              <Name>{el.name}</Name>
              <Price>{NumberComma(el.price)}</Price>
            </div>
          </Card>
        ))}
      </Wrapper>
    </>
  );
}
