import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Post = () => (
  <Card>
    <Card.Title title="Betty_Watson_67" subtitle="love cooking" left={LeftContent} />
    <Card.Content>
      <Text variant="titleLarge">YASS MMAMAMA WORK</Text>
      <Text variant="bodyMedium">like my cooking?</Text>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Like</Button>
      <Button>Comment</Button>
    </Card.Actions>
  </Card>
);

export default Post;