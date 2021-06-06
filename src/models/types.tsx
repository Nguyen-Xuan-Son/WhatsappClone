export type RootStackParamList = {
  Root: undefined;
  ChatRoom: undefined;
  Contacts: undefined;
  NotFound: undefined;
};

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type User = {
  id: string;
  name: string;
  status?: string;
  imageUri?: string;
};

export type Message = {
  id: string;
  content: string;
  createdAt: string;
  user?: User;
  userId?: string;
};

export type Messages = {
  id: string;
  users: User[];
  messages: Message[];
};

export type ChatItem = {
  id: string;
  users: User[];
  lastMessage: Message;
};
