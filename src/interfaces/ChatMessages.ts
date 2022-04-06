import IMessage from "./Message";

export default interface IChatMessages {
  [key: string]: IMessage[]
}
