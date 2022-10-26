import { formatDistanceToNow } from 'date-fns';
import {
  Card,
  CardBody,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  CardFooter,
  Tag,
  Avatar,
  UserBox,
  UserInfo,
  UserName,
  DatesStyled,
} from './BlogCard.styled';

export const BlogCard = ({
  poster,
  tag,
  title,
  description,
  userName,
  avatar,
  postedAt,
}) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardPoster src={poster} alt="card__image" />
        </CardHeader>
        <CardBody>
          <Tag>{tag}</Tag>
          <CardTitle>{title}</CardTitle>
          <CardText>{description}</CardText>
        </CardBody>
        <CardFooter>
          <UserBox>
            <Avatar src={avatar} alt="Jane Doe" />
            <UserInfo>
              <UserName>{userName}</UserName>
              <DatesStyled>
                {formatDistanceToNow(new Date(postedAt), { addSuffix: true })}
              </DatesStyled>
            </UserInfo>
          </UserBox>
        </CardFooter>
      </Card>
    </div>
  );
};
